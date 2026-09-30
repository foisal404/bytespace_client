"use client";

import Section from "@/app/components/custom/Section";
import { useMemo, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import CourseGrid from "./CourseGrid";
import { COURSE_CATEGORIES, COURSES } from "./courses";

const CourseContainer = () => {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const filteredCourses = useMemo(() => {
    if (activeCategory === "Featured") {
      return COURSES;
    }

    return COURSES.filter((course) => course.category.includes(activeCategory));
  }, [activeCategory]);

  return (
    <section className="w-full py-18 container mx-auto bg-white">
      <div className="mx-auto px-4 lg:max-w-274">
        <Section>
          <Section.Title className="text-xl leading-tight text-[#111827] sm:text-[44px] mx-auto">
            Discover Your Passion,
            <br />
            Build Your Skills
          </Section.Title>

          <Section.Subtitle className="mx-auto mt-2 max-w-3xl text-[10px] leading-relaxed text-gray sm:text-xs">
            At ByteSpace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </Section.Subtitle>
        </Section>
      </div>

      <CategoryFilter
        categories={COURSE_CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <CourseGrid courses={filteredCourses} />
    </section>
  );
};

export default CourseContainer;
