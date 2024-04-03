import { cn } from "@/lib/utils";

export type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "container  w-full flex flex-col items-center md:py-2.5 h-full  ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
