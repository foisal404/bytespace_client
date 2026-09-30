import { cn } from "@/app/libs/utils";
import { ReactNode } from "react";

type FloatingCardProps = {
  className?: string;
  children: ReactNode;
};

const HeroFloatingCard = ({ className, children }: FloatingCardProps) => {
  return (
    <div
      className={cn("absolute z-20 rounded-xl bg-white shadow-lg", className)}
    >
      {children}
    </div>
  );
};

export default HeroFloatingCard;
