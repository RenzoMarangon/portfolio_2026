import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  skill: string;
  children: React.ReactNode;
};

export const TooltipHover = ({ skill, children }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <p>{skill}</p>
      </TooltipContent>
    </Tooltip>
  );
};
