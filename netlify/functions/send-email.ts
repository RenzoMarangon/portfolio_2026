import type { Handler } from "@netlify/functions";
import { getClientIp } from "../lib/getClientIp";
import { ratelimit } from "../lib/rateLimit";
import { sendEmail } from "netlify/lib/email";
import { contactSchema } from "@/schemas/contactSchema";
import { sanitize } from "netlify/lib/sanitize";

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

    let { nombre, asunto, mensaje } = parsed.data;

    //Sanitize
    nombre = sanitize(nombre);
    asunto = sanitize(asunto);
    mensaje = sanitize(mensaje);

    //Rate limit
    const ip = getClientIp(event.headers);
    const { success } = await ratelimit.limit(ip);

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
