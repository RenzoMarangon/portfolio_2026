import { z } from "zod";
export const contactSchema = z.object({
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  asunto: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  //email: z.string().email("Debe ser un email válido"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
