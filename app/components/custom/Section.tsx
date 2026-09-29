import { cn } from "@/app/libs/utils";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

type SectionSubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: SectionProps) => {
  return (
    <div className={cn("text-center", className)}>
      {children}
    </div>
  );
};

const Title = ({ children, className }: SectionTitleProps) => {
  return (
    <h1
      className={cn(
        "max-w-3xl text-3xl font-bold leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-6xl",
        className,
      )}
    >
      {children}
    </h1>
  );
};

const Subtitle = ({
  children,
  className,
}: SectionSubtitleProps) => {
  return (
    <p
      className={cn(
        "mt-5 max-w-2xl text-sm leading-6 text-white/90 sm:mt-6 sm:text-base",
        className,
      )}
    >
      {children}
    </p>
  );
};

Section.Title = Title;
Section.Subtitle = Subtitle;

export default Section;