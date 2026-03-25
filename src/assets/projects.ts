import {
  argebas,
  introduccionaflexbox,
  cryptojuegos,
  navalelectric,
  bnbuddy,
  porfoliofantasia,
  drivecar,
  bolucompras,
  vanillastore,
} from "@/assets/img/projects/index";

import type { Skill } from "./skillsIcons";

export type Project = {
  title: string;
  skills: Skill[];
  description: string;
  href: string;
  githubUrl: string;
  img: string;
};

export const projects: Project[] = [
  {
    title: "DriveCar App | Concesionaria de autos",
    description:
      "Aplicación web creada como proyecto final para Progamación III. Es una app de concesionaria de autos, con funcionalidades de búsqueda, filtrado y detalles de cada vehículo, conectada con SqlServer para la gestión de datos",
    href: "https://youtube.com/",
    githubUrl: "https://github.com/RenzoMarangon/TP_Final_PrograIII_DriveCar",
    img: drivecar,
    skills: ["C#", "SQL Server", "ASP.NET"],
  },
  {
    title: "Argebas",
    description:
      "Landing page realizada para una empresa de alquiler de fotocopiadoras",
    href: "https://argebas.netlify.app/",
    githubUrl: "https://github.com/RenzoMarangon/Argebas",
    img: argebas,
    skills: ["React", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Proyecto Portfolio | UTN",
    description:
      "Portfolio creado para la materia Programación III de UTN FRGP",
    href: "https://portfolio-rm-utn.netlify.app/",
    githubUrl: "https://github.com/RenzoMarangon/portfolio_2025",
    img: porfoliofantasia,
    skills: ["HTML", "Bootstrap"],
  },
  {
    title: "Bolucompras | ecommerce",
    description:
      "ecommerce funcional creado con React, con login y carrito de compras, conectado con Firebase para la gestión de datos",
    href: "https://bolucompras.netlify.app/",
    githubUrl: "https://github.com/RenzoMarangon/e-commerce_bolucompras",
    img: bolucompras,
    skills: ["React", "Sass", "Firebase"],
  },
  {
    title: "Naval Electric",
    description:
      "Landing page para empresa especializada en instalaciones eléctricas para barcos",
    href: "https://naval-electric.netlify.app/",
    githubUrl: "https://github.com/RenzoMarangon/naval-electric",
    img: navalelectric,
    skills: ["HTML", "Sass", "JavaScript"],
  },
];
