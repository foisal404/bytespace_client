import { SignalMedium } from "lucide-react";
import Image from "next/image";
import { Course } from "./courses";

type CourseCardProps = {
  course: Course;
};

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <article className="overflow-hidden rounded-xl border border-[#CED0D3] bg-white cursor-pointer hover:shadow-lg transition-shadow">
      {/* Thumbnail */}
      <div className="relative aspect-[2.1/1] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />

        <div className="absolute bottom-2 left-2 flex gap-1">
          <span className="rounded-full bg-white-1 px-2 py-1 text-[12px] text-black-1 font-medium">
            {course.lessons} Lessons
          </span>

          <span className="rounded-full bg-white-1 px-2 py-1 text-[12px] text-black-1 font-medium">
            {course.duration}
          </span>

          <span className="rounded-full bg-white-1 px-2 py-1 text-[12px] text-black-1 font-medium">
            {course.comments} Comments
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="line-clamp-1 text-[20px] font-semibold text-black">
              {course.title}
            </h3>

            <p className="mt-0.5 text-[12px] font-[400] text-gray-400">
              by <span className="text-blue-1">{course.instructor}</span>
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-0.5 text-[18px] text-black-1">
            <span>{course.rating}</span>
            <span>★</span>
          </div>
        </div>

        {/* Instructor */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <div className="flex items-end gap-1">
              <SignalMedium size={24} className="text-gray" />{" "}
              <span className="text-[12px] text-gray-2">Beginner</span>
            </div>
            <div className="flex -space-x-1.5 items-center">
              {course.avatars.map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar}
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white object-cover"
                />
              ))}
              <span className="z-10 flex  h-8 w-8 items-center justify-center rounded-full bg-lime text-[10px] font-semibold text-black">
                26+
              </span>
            </div>
          </div>
        </div>
        <div>
          <span className="text-[20px] font-bold text-blue-1">${course.price}</span>

          <span className="ml-1 text-[8px] text-gray">/lifetime</span>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
