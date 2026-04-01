import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TooltipHover } from "@/components/TooltipHover";
import profile from "@/assets/img/profile.jpg";
import { toast } from "sonner";
import { Copy } from "lucide-react";

const email = "renzomarangon@gmail.com";

const handleCopy = async () => {
  await navigator.clipboard.writeText(email);
  toast.success(
    <span className="font-semibold text-base">Email copiado</span>,
    {
      position: "top-center",
    },
  );
};

export const About = () => {
  return (
    <Section className="mt-16 lg:mt-18">
      <Container className="flex flex-col md:flex-row gap-8 pb-4 md:pb-0 pt-4 rounded-t-none md:rounded-t-lg rounded-lg bg-white shadow-md md:mt-4">
        <img
          src={profile}
          alt="Renzo Marangon profile picture"
          className="w-50 m-auto md:h-60 md:w-auto rounded-lg mb-4"
        />

        <div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Renzo Marangon</h2>
            <h3 className="font-semibold">Backend Developer</h3>
            <p>
              Desarrollador orientado a backend, estudiante avanzado de la
              Tecnicatura en Programación (UTN FRGP) y profesor superior en
              informática. Tengo experiencia como analista de e-commerce
              trabajando con datos y flujos reales de negocio. Actualmente estoy
              enfocado en backend, desarrollando APIs y manejando bases de datos
              relacionales y no-relacionales.
            </p>
          </div>
          <div className="flex gap-4 text-2xl mt-4">
            <a
              href="https://www.linkedin.com/in/renzo-marangon/"
              target="_blank"
              rel="noopener noreferrer">
              <TooltipHover skill="LinkedIn">
                <FaLinkedin className="mt-0.5" />
              </TooltipHover>
            </a>
            <a
              href="https://github.com/RenzoMarangon"
              target="_blank"
              rel="noopener noreferrer">
              <TooltipHover skill="GitHub">
                <FaGithub className="mt-0.5" />
              </TooltipHover>
            </a>

            <div className="flex items-center">
              <p className="text-left text-base flex items-center gap-2 px-2">
                renzomarangon@gmail.com
              </p>
              <TooltipHover skill="Copiar email">
                <Copy
                  onClick={handleCopy}
                  className=" rounded-md border-1 px-2 hover:bg-gray-200 transition-colors w-8 h-8"
                />
              </TooltipHover>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
