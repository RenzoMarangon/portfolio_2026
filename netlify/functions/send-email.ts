import type { Handler } from "@netlify/functions";
import { ratelimit } from "../lib/ratelimit";
import { getClientIp } from "../lib/getClientIp";

export const handler: Handler = async (event) => {
  try {
    const ip = getClientIp(event.headers);

    const { success, limit, remaining } = await ratelimit.limit(ip);

    if (!success) {
      return {
        statusCode: 429,
        body: JSON.stringify({
          error: "Demasiados envíos. Por favor, intenta nuevamente más tarde.",
        }),
      };
    }

    // DEBUG LOG
    console.log(
      {
        ip,
        limit,
        remaining,
      },
      event.headers,
    );

    // ⚠️ acá todavía NO hacemos nada más (email, etc.)
    // solo probamos que el rate limit funcione

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error("RATE LIMIT ERROR:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error interno del servidor" }),
    };
  }
};
