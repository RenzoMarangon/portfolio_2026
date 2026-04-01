import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import type { SkillToShow } from "@/assets/skillsIcons";
import { skillsToShow } from "@/assets/skillsIcons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Skills = () => {
  return (
    <Section id="skills">
      <Container className=" p-4 pb-6 rounded-lg bg-white shadow-md mt-4">
        <h2 className="text-2xl font-bold mb-6">Habilidades</h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-6xl mx-auto">
          <CarouselContent className="">
            {Object.keys(skillsToShow).map((skill) => {
              const Icon = skillsToShow[skill as SkillToShow];

              if (!Icon) return null;

              return (
                <CarouselItem
                  key={skill}
                  className="basis-1/3 sm:basis-1/4 lg:basis-1/6 ml-0.5 -mr-1 pb-0.5">
                  <div className="flex flex-col items-center">
                    <Icon className="text-4xl mb-2" />
                    <p className="text-center">{skill}</p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="-left-2 sm:flex sm:left-0 md:-left-4 lg:-left-5" />
          <CarouselNext className="-right-2 sm:flex sm:right-0 md:-right-4 lg:-right-5" />
        </Carousel>
      </Container>
    </Section>
  );
};
