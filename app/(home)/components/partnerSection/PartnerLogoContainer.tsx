import Image, { StaticImageData } from "next/image";

import {
  PARTNER_01,
  PARTNER_02,
  PARTNER_03,
  PARTNER_04,
  PARTNER_05,
} from "@/app/utils/imports";

type Logo = {
  src: StaticImageData;
  alt: string;
};

const logos: Logo[] = [
  {
    src: PARTNER_01,
    alt: "Logoipsum",
  },
  {
    src: PARTNER_02,
    alt: "Logoipsum",
  },
  {
    src: PARTNER_03,
    alt: "Logoipsum",
  },
  {
    src: PARTNER_04,
    alt: "Logoipsum",
  },
  {
    src: PARTNER_05,
    alt: "Logoipsum",
  },
];

const PartnerLogoContainer = () => {
  return (
    <section className="w-full bg-[#F5F5F6]">
      <div className="mx-auto max-w-7xl overflow-hidden px-5 py-20 sm:px-8 lg:px-10">
        <div className="flex items-center flex-wrap justify-between gap-8 md:gap-10">
          {logos?.map((logo, index) => (
            <div
              key={index}
              className="flex h-10.25 w-37.5 shrink-0 items-center justify-center sm:w-40 lg:w-42.5"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={170}
                height={41}
                className="h-10.25 w-42.5 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogoContainer;
