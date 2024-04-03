import { cn } from "@/lib/utils";

export type SectionContainerProps = {
  children?: React.ReactNode;
  className?: string;
  backgroundImgUrl?: string;
};

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
  backgroundImgUrl,
}) => {
  return (
    <section
      style={{ backgroundImage: `${backgroundImgUrl}` }}
      className={cn(
        "w-full px-2.5 md:px-24 text-neutral-950 dark:text-neutral-100 py-8 md:py-16",
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
