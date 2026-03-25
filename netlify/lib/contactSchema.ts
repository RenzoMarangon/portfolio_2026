import { z } from "zod";

export const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, "Nombre muy corto")
    .max(50, "Nombre muy largo")
    .regex(/^[a-zA-Z\s]+$/, "Solo letras"),

  asunto: z.string().min(3, "Asunto muy corto").max(100, "Asunto muy largo"),

  mensaje: z
    .string()
    .min(10, "Mensaje muy corto")
    .max(1000, "Mensaje muy largo"),
});

export type ContactSchema = z.infer<typeof contactSchema>;
