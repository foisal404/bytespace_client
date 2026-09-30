import { cn } from "@/app/libs/utils";

type CategoryButtonProps = {
  label: string;
  active?: boolean;
  onClick: () => void;
};

const CategoryButton = ({
  label,
  active = false,
  onClick,
}: CategoryButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 md:py-3 text-xs md:text-[16px] font-medium transition-colors cursor-pointer",
        active
          ? "bg-lime text-black"
          : "bg-[#F5F5F6] text-gray-600 hover:bg-gray-200",
      )}
    >
      {label}
    </button>
  );
};

export default CategoryButton;
