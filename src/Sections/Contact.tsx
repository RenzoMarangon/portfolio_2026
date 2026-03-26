import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactFormData } from "@/schemas/contactSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";

import Turnstile from "react-turnstile";
import { useState } from "react";

export const Contact = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      asunto: "",
      mensaje: "",
    },
  });

  //TOKEN
  const [token, setToken] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    //Si viene sin el token, no se envía el formulario
    if (!token) {
      toast.error("Completá el captcha");
      return;
    }

    try {
      await axios.post("/.netlify/functions/send-email", { ...data, token });
      toast.success("Mensaje enviado");
      form.reset();
      setToken(null);
    } catch (error) {
      toast.error("Error al enviar el mensaje");
    }
  };

  return (
    <Section>
      <Container className="p-4 rounded-lg bg-white shadow-md mt-4">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <FieldSet>
              <h2 className="font-bold text-2xl">Contacto</h2>

              <FieldSeparator />

              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Nombre
                  </FieldLabel>
                  <Input
                    {...form.register("nombre")}
                    id="checkout-7j9-card-name-43j"
                    placeholder="Juan Pérez"
                    required
                  />
                </Field>
                {form.formState.errors.nombre && (
                  <p className="bg-red-500 text-white text-sm py-1 px-2 rounded -mt-1 max-w-100">
                    {form.formState.errors.nombre.message}
                  </p>
                )}
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                    Asunto
                  </FieldLabel>
                  <Input
                    {...form.register("asunto")}
                    id="checkout-7j9-card-number-uw1"
                    placeholder="Asunto del mensaje"
                    required
                  />
                </Field>
                {form.formState.errors.asunto && (
                  <p className="bg-red-500 text-white text-sm py-1 px-2 rounded -mt-1 max-w-100">
                    {form.formState.errors.asunto.message}
                  </p>
                )}
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-optional-comments">
                    Mensaje
                  </FieldLabel>
                  <Textarea
                    {...form.register("mensaje")}
                    id="checkout-7j9-optional-comments"
                    placeholder="Escribí el mensaje acá..."
                    className="resize-none"
                  />
                  {form.formState.errors.mensaje && (
                    <p className="bg-red-500 text-white text-sm py-1 px-2 rounded -mt-1 max-w-100">
                      {form.formState.errors.mensaje.message}
                    </p>
                  )}
                </Field>
              </FieldGroup>
            </FieldSet>

            <Field orientation="horizontal" className="justify-end">
              <Turnstile
                sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                onVerify={(t) => setToken(t)}
              />
              <Button
                type="submit"
                className="p-4 cursor-pointer hover:bg-slate-600 transition-colors">
                Enviar
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </Container>
    </Section>
  );
};
