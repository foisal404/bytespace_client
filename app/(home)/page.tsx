import CourseContainer from "./components/courseSection/CourseContainer";
import PartnerLogoContainer from "./components/partnerSection/PartnerLogoContainer";
import HomeTopBanner from "./components/topBanner/HomeTopBanner";

const HomePage = () => {
  return (
    <section className="w-full bg-white">
      <HomeTopBanner />
      <PartnerLogoContainer />
      <CourseContainer />
    </section>
  );
};

export default HomePage;
