import { ELLIPSE, PERSON } from "@/app/utils/imports";
import Image from "next/image";

const HeroPerson = () => {
  return (
    <>
      <Image
        src={ELLIPSE}
        alt=""
        aria-hidden
        priority
        className="pointer-events-none absolute bottom-0 left-1/2 w-[650px] max-w-none -translate-x-1/2 sm:w-[750px] md:w-[850px] lg:w-[900px]"
      />

      <Image
        src={PERSON}
        alt="Smiling student with headphones holding a laptop"
        priority
        className="pointer-events-none absolute bottom-0 left-1/2 z-10 w-[250px] -translate-x-1/2 sm:w-[300px] md:w-[390px] lg:w-[460px]"
      />
    </>
  );
};

export default HeroPerson;
