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
                      <img src="" alt="Logo" />
                    </a>
                  </h1>
                </SheetTitle>
              </SheetHeader>

              <ul className="flex flex-col gap-2 ml-4">
                {Links.map((l) => (
                  <li key={l.href}>
                    <SheetClose asChild>
                      <a className="" href={l.href}>
                        {l.label}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </nav>
  );
};
