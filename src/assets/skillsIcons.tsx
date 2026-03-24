import {
  DiReact,
  DiBootstrap,
  DiCss3,
  DiSass,
  DiMsqlServer,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { FaSquareJs } from "react-icons/fa6";
import { SiDotnet } from "react-icons/si";

export const skillsIcons = {
  React: DiReact,
  TailwindCSS: RiTailwindCssFill,
  TypeScript: BiLogoTypescript,
  Bootstrap: DiBootstrap,
  CSS: DiCss3,
  JavaScript: FaSquareJs,
  Sass: DiSass,
  "SQL Server": DiMsqlServer,
  Firebase: IoLogoFirebase,
  HTML: FaHtml5,
  "C#": TbBrandCSharp,
  "ASP.NET": SiDotnet,
};

export type Skill = keyof typeof skillsIcons;
