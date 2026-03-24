import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";

import { projects } from "../assets/projects";
import type { Project } from "../assets/projects";
import type { Skill } from "../assets/skillsIcons";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { TooltipHover } from "@/components/TooltipHover";
import { skillsIcons } from "@/assets/skillsIcons";

export const Projects = () => {
  return (
    <Section>
      <Container>
        <h2 className="text-3xl font-bold mb-6">Proyectos</h2>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-6xl mx-auto">
          <CarouselContent className="">
            {projects.map((project: Project) => (
              // ITEM
              <CarouselItem
                key={project.title}
                className="basis-full sm:basis-1/2 lg:basis-1/3 ml-0.5 -mr-1 pb-0.5">
                {/* CARD */}
                <Card className="relative mx-auto w-full max-w-sm pt-0 h-full">
                  <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                  <img
                    src={project.img}
                    alt="Event cover"
                    className="relative z-20 aspect-video w-full object-cover "
                  />
                  <CardHeader>
                    <div className="flex gap-1">
                      {project.skills.map((skill: Skill) => {
                        const Icon = skillsIcons[skill];

                        if (!Icon) return null;

                        return (
                          <TooltipHover key={skill} skill={skill}>
                            <Icon className="text-3xl" />
                          </TooltipHover>
                        );
                      })}
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="gap-2 mt-auto">
                    <Button className="w-40" asChild>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer">
                        Demo
                      </a>
                    </Button>
                    <Button className="w-40" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer">
                        Código
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2 sm:flex sm:left-0 md:-left-4 lg:-left-10" />
          <CarouselNext className="-right-2 sm:flex sm:right-0 md:-right-4 lg:-right-10" />
        </Carousel>
      </Container>
    </Section>
  );
};
