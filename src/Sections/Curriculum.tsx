import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Separator } from "@/components/ui/separator";

export const Curriculum = () => {
  return (
    <Section id="cv" className="scroll-mt-18">
      <Container className=" p-4 pb-6 rounded-lg bg-white shadow-md mt-4">
        <h2 className="text-2xl font-bold">Currículum</h2>

        {/* XP LABORAL */}

        <h4 className="text-lg font-medium ml-2 mt-2">Experiencia laboral</h4>
        <Accordion
          type="single"
          collapsible
          defaultValue="nexina"
          className="rounded shadow-gray-50 shadow-xl px-6 py-3">
          <AccordionItem
            value="magazzino"
            className=" flex flex-col text-md font-medium border-none">
            <p className="">Magazzino S.A. | Catalogador de ecommerce</p>
            <AccordionTrigger className=" text-md font-light ml-2 p-0">
              <p className="">Freelance | Septiembre 2025 - Febrero 2026</p>
            </AccordionTrigger>

            <AccordionContent className=" font-light text-sm ml-2 pl-3 -indent-3 md:pl-0 md:indent-0 pb-0 ">
              <span className="">
                - Gestión y optimización de publicaciones en Mercado Libre,
                Vtex, WooCommerce.
              </span>
            </AccordionContent>
          </AccordionItem>

          <Separator className="my-4 opacity-50" />

          <AccordionItem
            value="nexina"
            className=" flex flex-col text-md font-medium border-none">
            <p className="text-md font-medium">
              Nexina S.A. | Analista de ecommerce
            </p>
            <AccordionTrigger className=" text-md font-light ml-2 p-0">
              Benavidez | Julio 2024 - Junio 2025
            </AccordionTrigger>
            <AccordionContent className="flex flex-col font-light text-sm ml-2 mb-0 -indent-3 md:pl-0 md:indent-0 pb-0">
              <span className="ml-2 pl-3 -indent-3 md:pl-0 md:indent-0">
                - Gestión y optimización de publicaciones en Mercado Libre,
                Vtex, WooCommerce y otras plataformas.
              </span>
              <span className="ml-2 pl-3 -indent-3 md:pl-0 md:indent-0">
                - Mantenimiento de sitio web en WordPress, realizando ajustes
                técnicos y mejoras funcionales.
              </span>
              <span className="ml-2 pl-3 -indent-3 md:pl-0 md:indent-0">
                - Análisis de datos de ventas y comportamiento de productos para
                la toma de decisiones.
              </span>
              <span className="ml-2 pl-3 -indent-3 md:pl-0 md:indent-0">
                - Implementación de mejoras basadas en métricas que impactaron
                en la conversión y rotación.
              </span>
            </AccordionContent>
          </AccordionItem>

          <Separator className="my-4 opacity-50" />

          <AccordionItem
            value="eesn28"
            className=" flex flex-col text-md font-medium border-none">
            <p className="text-md font-medium">
              E.E.S. N°28 | Soporte Técnico Informático
            </p>
            <AccordionTrigger className=" text-md font-light ml-2 p-0">
              Escobar | Septiembre 2021 - Marzo 2024
            </AccordionTrigger>
            <AccordionContent className="flex flex-col font-light text-sm ml-2 pl-3 -indent-3 md:pl-0 md:indent-0 pb-0">
              <span className="ml-2  pl-3 -indent-3 md:pl-0 md:indent-0">
                - Mantenimiento y reparación de equipos informáticos (hardware y
                software).
              </span>
              <span className="ml-2  pl-3 -indent-3 md:pl-0 md:indent-0">
                - Gestión de usuarios y carga de datos en sistemas
                institucionales.
              </span>
            </AccordionContent>
          </AccordionItem>

          <Separator className="my-4 opacity-50" />

          <AccordionItem
            value="serviprof"
            className=" flex flex-col text-md font-medium border-none">
            <p className="text-md font-medium">
              Serviprof | Catalogador de ecommerce
            </p>
            <AccordionTrigger className=" text-md font-light ml-2 p-0">
              Garín | Noviembre 2020 - Septiembre 2021
            </AccordionTrigger>
            <AccordionContent className="flex flex-col font-light text-sm ml-2 pl-3 -indent-3 md:pl-0 md:indent-0 pb-0">
              <span className="ml-2  pl-3 -indent-3 md:pl-0 md:indent-0">
                - Gestión y actualización de base de datos de productos.
              </span>
              <span className="ml-2  pl-3 -indent-3 md:pl-0 md:indent-0">
                - Soporte técnico y mantenimiento de equipos.
              </span>
            </AccordionContent>
          </AccordionItem>

          <Separator className="my-4 opacity-50" />

          <AccordionItem
            value="maxiclima"
            className=" flex flex-col text-md font-medium border-none">
            <p className="text-md font-medium">
              Maxiclima S.R.L. | Técnico de AA
            </p>
            <AccordionTrigger className=" text-md font-light ml-2 p-0">
              Enero 2014 | Marzo 2018
            </AccordionTrigger>
            <AccordionContent className="flex flex-col font-light text-sm ml-2 pl-3 -indent-3 md:pl-0 md:indent-0 pb-0">
              <span className="ml-2 pl-3 -indent-3 md:pl-0 md:indent-0">
                - Limpieza y mantenimiento de equipos de aire acondicionado.
              </span>
              <span className="ml-2 pl-3 -indent-3 md:pl-0 md:indent-0">
                - Instalación de equipos de aire acondicionado.
              </span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* EDUCACION */}

        <div className=" rounded shadow-gray-50 shadow-xl px-6 py-3 mt-2">
          <h4 className="text-lg font-medium  mb-1">Educación</h4>

          <div className="ml-2 flex flex-col">
            <p className="text-md font-medium">
              Tecnicatura Superior en Programación | 2023 - Actualidad
            </p>
            <p className="flex flex-col text-md font-light ml-2">
              Universidad Tecnológica Nacional (UTN) - Gral Pacheco
            </p>
          </div>

          <Separator className="my-4 opacity-50" />

          <div className="ml-2 flex flex-col">
            <p className="text-md font-medium">
              Licenciatura en Informática | 2020 - 2021
            </p>
            <p className="flex flex-col text-md font-light ml-2">
              Universidad Nacional General Sarmiento (UNGS)
            </p>
          </div>

          <Separator className="my-4 opacity-50" />

          <div className="ml-2 flex flex-col">
            <p className="text-md font-medium">
              Profesorado Superior en Informática | 2016 - 2020
            </p>
            <p className="flex flex-col text-md font-light ml-2">
              Instituto Profesorado CONSUDEC
            </p>
          </div>

          <Separator className="my-4 opacity-50" />

          <div className="ml-2 flex flex-col">
            <p className="text-md font-medium">
              Tecnicatura en Electromecánica | 2007 - 2013
            </p>
            <p className="flex flex-col text-md font-light ml-2">
              EET N° 1 Escobar | Hipólito Bouchard
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
