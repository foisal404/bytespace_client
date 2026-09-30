import HeroContent from "./HeroContent";
import HeroDecorations from "./HeroDecorations ";
import HeroFloatingCards from "./HeroFloatingCards";
import HeroPerson from "./HeroPerson";

const HomeTopBanner = () => {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#003BE2] bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_2px,transparent_2px)] bg-[size:80px_80px] sm:min-h-[760px] md:min-h-[820px] md:bg-[size:120px_120px] lg:min-h-[850px]">
      <HeroDecorations />

      <HeroContent />

      <HeroPerson />

      <HeroFloatingCards />
    </section>
  );
};

export default HomeTopBanner;
