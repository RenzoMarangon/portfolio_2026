type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-4 ${className}`}>
      {children}
    </div>
  );
};
