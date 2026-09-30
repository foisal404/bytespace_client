import CourseCard from "./CourseCard";
import { Course } from "./courses";

type CourseGridProps = {
  courses: Course[];
};

const CourseGrid = ({ courses }: CourseGridProps) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-274 mx-auto px-4">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseGrid;
