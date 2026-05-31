import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import rm_logo from "@/assets/img/rm_logo.png";
import { TooltipHover } from "./TooltipHover";
import { Download } from "lucide-react";

const Links = [
  {
    href: "#",
    label: "Inicio",
  },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#cv", label: "Currículum" },
  { href: "#contact", label: "Contacto" },
];

export const Navbar = () => {
  return (
    <nav className="backdrop-blur-md shadow-sm ">
      <Container className="flex h-16 items-center justify-between">
        {/* LOGO */}
        <h1>
          <a href="#" className="flex gap-2 items-center">
            <img src={rm_logo} alt="Logo" className="h-8 rounded-full" />
            <span className="">Portfolio | Renzo Marangon</span>
          </a>
        </h1>

        {/* LINKS DESKTOP*/}
        <ul className="hidden lg:flex justify-between gap-6 text-sm ">
          {Links.map((l) => (
            <li key={l.href}>
              <a className="hover:underline underline-offset-4" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU */}

        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="capitalize">
                ☰
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]">
              <SheetHeader>
                <SheetTitle>
                  {/* LOGO */}
                  <h1 className="">
                    <a href="/">
                      <span className="sr-only">
                        Portfolio | Renzo Marangon
                      </span>
                      <img
                        src={rm_logo}
                        alt="Logo"
                        className="h-8 rounded-full"
                      />
                    </a>
                  </h1>
                </SheetTitle>
              </SheetHeader>

              <ul className="flex flex-1 flex-col items-start gap-2 ml-4 h-full">
                {Links.map((l) => (
                  <li key={l.href}>
                    <SheetClose asChild>
                      <a className="" href={l.href}>
                        {l.label}
                      </a>
                    </SheetClose>
                  </li>
                ))}

                <li className="mt-auto mb-8">
                  <div className="block lg:hidden">
                    <TooltipHover skill="Descargar currículum.pdf">
                      <Button
                        asChild //Permite que el botón se comporte como una etiqueta <a> sin romper el HTML
                        variant="outline"
                        className="gap-2 font-medium">
                        <a
                          href="/Renzo_Marangon_CV.pdf"
                          download="Renzo_Marangon_CV.pdf">
                          <Download className="h-4 w-4" /> {/* Ícono */}
                          Descargar CV
                        </a>
                      </Button>
                    </TooltipHover>
                  </div>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </nav>
  );
};
