import { Container } from "./Container";
import "@radix-ui/themes/styles.css";

const Links = [
  {
    href: "/",
    label: "Inicio",
  },
  { href: "/about", label: "Sobre mi" },
  { href: "/skills", label: "Habilidades" },
  { href: "/experience", label: "Experiencia" },
  { href: "/studies", label: "Estudios" },
  { href: "/contact", label: "Contacto" },
];

export const Navbar = () => {
  return (
    <nav className="backdrop-blur-md shadow-sm">
      <Container>
        {/* LOGO */}
        <h1 className="">
          <a href="/">
            <span className="sr-only">Portfolio | Renzo Marangon</span>
            <img src="" alt="Logo" />
          </a>
        </h1>

        {/* LINKS DESKTOP*/}
        <ul className="hidden md:flex">
          {Links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU */}
      </Container>
    </nav>
  );
};
