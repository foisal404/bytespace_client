import {
  LEFT_CIRCLE,
  LEFT_SQUIGGLE,
  LEFT_WHITE_SQUIGGLE,
  RIGHT_RET,
  RIGHT_SQUIGGLE,
  RIGHT_TRIANGLE,
} from "@/app/utils/imports";
import Image from "next/image";

const HeroDecorations = () => {
  return (
    <>
      <Image
        src={LEFT_SQUIGGLE}
        alt=""
        aria-hidden
        className="pointer-events-none absolute md:-left-20 top-46 md:top-32 w-36  lg:-left-10 lg:w-56"
      />

      <Image
        src={LEFT_WHITE_SQUIGGLE}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-10 top-105 w-16 lg:left-40 lg:w-24"
      />

      <Image
        src={RIGHT_RET}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-10 top-20 w-30 lg:right-0 lg:w-64"
      />

      <Image
        src={RIGHT_TRIANGLE}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-10 top-80 md:top-105 w-18 lg:right-52 lg:w-40"
      />

      <Image
        src={LEFT_CIRCLE}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-40 md:-bottom-4 md:-left-12 w-20  lg:-left-4 lg:w-48 z-50"
      />

      <Image
        src={RIGHT_SQUIGGLE}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-8 bottom-28 w-30 lg:right-0 lg:w-40 z-10"
      />
    </>
  );
};

export default HeroDecorations;
