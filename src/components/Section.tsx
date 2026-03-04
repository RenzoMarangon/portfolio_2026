type SectionProps = {
  children: React.ReactNode;
  className?: string;
  Id?: string;
};

export const Section = ({ children, className, Id }: SectionProps) => {
  return (
    <div id={Id} className={className}>
      {children}
    </div>
  );
};
