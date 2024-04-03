import { cn } from "@/lib/utils";

export type FormWrapperProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
};

const FormWrapper: React.FC<FormWrapperProps> = ({
  children,
  className,
  title,
  subtitle,
}) => {
  return (
    <div
      className={cn(
        "md:w-[400px] bg-neutral-100 dark:bg-neutral-900  border  p-8 shadow-xl flex flex-col gap-y-4 ",
        className
      )}
    >
      <h1 className="text-2xl text-blue-500 font-bold text-center">{title}</h1>
      <p className="font-light text-sm">{subtitle}</p>
      {children}
    </div>
  );
};

export default FormWrapper;
