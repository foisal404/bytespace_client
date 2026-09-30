import Section from "@/app/components/custom/Section";
import { Search } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-5 text-center sm:px-6 pt-24">
      <Section>
        <Section.Title>Get Access to Hundreds Courses Available</Section.Title>

        <Section.Subtitle>
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </Section.Subtitle>
      </Section>

      <div className="mt-8 flex w-full max-w-xl gap-3 sm:mt-10 items-center">
        <label className="flex h-12 w-full flex-1 items-center gap-2 rounded-full bg-white px-4">
          <Search className="h-4 w-4 shrink-0 text-gray-500" />

          <input
            type="text"
            placeholder="Course, topic, creator"
            className="w-full min-w-0 bg-transparent text-sm text-gray-800 placeholder:text-gray-500 focus:outline-none"
          />
        </label>

        <button
          type="button"
          className="h-12 shrink-0 rounded-full bg-[#C8F400] px-7 text-sm font-medium text-black transition hover:brightness-95 sm:w-auto"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
