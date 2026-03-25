import type { Handler } from "@netlify/functions";
import { contactSchema } from "../../src/schemas/contactSchema";
import { sendEmail } from "../lib/email";

export const handler: Handler = async (event) => {
  try {
    const data = JSON.parse(event.body || "{}");
    const parsed = contactSchema.parse(data);

    await sendEmail(parsed);

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error: any) {
    console.error(error.response?.data || error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Error al enviar el email" }),
    };
  }
};
