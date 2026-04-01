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
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { TbBrandCSharp, TbFileTypeSql } from "react-icons/tb";
import { FaSquareJs } from "react-icons/fa6";
import { SiDotnet, SiNestjs, SiPostgresql } from "react-icons/si";

export const skillsIcons = {
  "C#": TbBrandCSharp,
  "ASP.NET": SiDotnet,
  SQL: TbFileTypeSql,
  NodeJS: FaNodeJs,
  PostgreSQL: SiPostgresql,
  "SQL Server": DiMsqlServer,
  TypeScript: BiLogoTypescript,
  NestJS: SiNestjs,
  React: DiReact,
  Firebase: IoLogoFirebase,
  JavaScript: FaSquareJs,
  TailwindCSS: RiTailwindCssFill,
  Bootstrap: DiBootstrap,
  Sass: DiSass,
  CSS: DiCss3,
  HTML: FaHtml5,
};

export const skillsToShow = {
  "C#": TbBrandCSharp,
  "ASP.NET": SiDotnet,
  "SQL Server": DiMsqlServer,
  TypeScript: BiLogoTypescript,
  NodeJS: FaNodeJs,
  PostgreSQL: SiPostgresql,
  NestJS: SiNestjs,
  Firebase: IoLogoFirebase,
  React: DiReact,
};

export type Skill = keyof typeof skillsIcons;

export type SkillToShow = keyof typeof skillsToShow;
