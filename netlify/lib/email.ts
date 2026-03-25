/// <reference types="node" />

import { Resend } from "resend";
import type { ContactFormData } from "../../src/schemas/contactSchema";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendEmail({ nombre, asunto, mensaje }: ContactFormData) {
  return resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "renzomarangon@outlook.com",
    subject: asunto,
    html: `
      <p><strong>${nombre}</strong></p>
      <p>${mensaje}</p>
    `,
  });
}
