import CategoryButton from "./CategoryButton";

type CategoryFilterProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="mt-10 lg:max-w-260 mx-auto">
      {/* Desktop */}
      <div className="flex-wrap justify-center items-center gap-1 md:gap-4 flex gap-y-2 md:gap-y-5">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            label={category}
            active={activeCategory === category}
            onClick={() => onCategoryChange(category)}
          />
        ))}
        <p className="text-blue-1 cursor-pointer text-xs md:text-[16px]">+more</p>
      </div>
    </div>
  );
};

export default CategoryFilter;
