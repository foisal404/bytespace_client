import {
  AVATAR_1,
  AVATAR_2,
  AVATAR_3,
  AVATAR_4,
  AVATAR_5,
  AVATAR_6,
} from "@/app/utils/imports";
import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import HeroFloatingCard from "./HeroFloatingCard";

const AVATARS: StaticImageData[] = [
  AVATAR_1,
  AVATAR_2,
  AVATAR_3,
  AVATAR_4,
  AVATAR_5,
  AVATAR_6,
];

const HeroFloatingCards = () => {
  return (
    <>
      {/* Course */}
      <HeroFloatingCard className="bottom-[205px] left-[4%] px-2 py-2 md:px-4 md:py-3 lg:bottom-[300px] lg:left-[28%] z-50">
        <p className="text-xs md:text-[16px] font-medium text-gray-900">UI/UX Design</p>

        <p className="mt-1 text-[9px] md:text-[12px] text-gray-500">
          200 Courses &nbsp;•&nbsp; 1000+ Students
        </p>
      </HeroFloatingCard>

      {/* Learning Progress */}
      <HeroFloatingCard className="bottom-[180px] right-[0%] md:right-[4%]  lg:w-60 p-2 md:p-4 lg:bottom-[250px] lg:right-[26%]">
        <p className="text-xs lg:text-[14px] text-gray-600">Learning Progress</p>

        <p className="mt-1 text-md lg:text-[48px] font-semibold text-gray-900">55%</p>

        <div className="mt-2 h-1.5 w-full rounded-full bg-gray-200">
          <div className="h-full w-[55%] rounded-full bg-[#C8F400]" />
        </div>
      </HeroFloatingCard>

      {/* Happy Students */}
      <HeroFloatingCard className="bottom-5 md:bottom-20 left-[0%] p-4 lg:left-[24%]">
        <p className="text-xs md:text-sm font-medium text-gray-900">Happy Students</p>

        <p className="mt-0.5 flex items-center gap-1 text-[11px] text-gray-500">
          4.5 (240)
          <Star className="h-3 w-3 fill-[#C8F400] text-[#C8F400]" />
        </p>

        <div className="mt-1 md:mt-3 flex items-center">
          {AVATARS.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt=""
              className="-ml-2 h-4 w-4 md:h-9 md:w-9 rounded-full border-2 border-white object-cover first:ml-0"
            />
          ))}

          <span className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#C8F400] text-[10px] font-semibold text-black">
            2K+
          </span>
        </div>
      </HeroFloatingCard>
    </>
  );
};

export default HeroFloatingCards;
