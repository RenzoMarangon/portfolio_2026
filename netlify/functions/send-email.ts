import type { Handler } from "@netlify/functions";
import { getClientIp } from "../lib/getClientIp";
import { ratelimit } from "../lib/rateLimit";
import { sendEmail } from "../lib/email";
import { contactSchema } from "../lib/contactSchema";
import { sanitize } from "../lib/sanitize";

//type para la respuesta de Cloudflare Turnstile
type TurnstileResponse = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export const handler: Handler = async (event) => {
  try {
    //Parseo el body
    let body;
    try {
      body = JSON.parse(event.body || "{}");
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Solicitud inválida" }),
      };
    }

    //Valido con Zod
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Datos inválidos",
          details: parsed.error,
        }),
      };
    }

    let { nombre, asunto, mensaje, token } = parsed.data;

    //Captcha
    if (!token) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Captcha requerido" }),
      };
    }

    //Verifico captcha con Cloudflare
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET!,
          response: token,
        }),
      },
    );

    const verifyData = (await verifyRes.json()) as TurnstileResponse;

    if (!verifyData.success) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Captcha inválido" }),
      };
    }

    //Sanitize
    nombre = sanitize(nombre);
    asunto = sanitize(asunto);
    mensaje = sanitize(mensaje);

    //Rate limit
    const ip = getClientIp(event.headers);
    const { success } = await ratelimit.limit(ip);

    //Debug logging
    console.log({
      ip,
      captcha: verifyData.success,
    });

    if (!success) {
      return {
        statusCode: 429,
        body: JSON.stringify({
          error: "Demasiados envíos. Intentá más tarde.",
        }),
      };
    }

    await sendEmail({ nombre, asunto, mensaje });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error("Rate limit error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error interno del servidor" }),
    };
  }
};
