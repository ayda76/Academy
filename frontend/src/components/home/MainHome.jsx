import Footer from "../footer/Footer";
import Hero from "../header/Hero";
import MainCertification from "./certification/MainCertification";
import MainFeatures from "./features/MainFeatures";
import MainPopularCourse from "./popular-course/MainPopularCourse";

const MainHome = () => {
  return (
    <div className="space-y-8">
      <Hero />
      <MainPopularCourse />
      <MainCertification />
      <MainFeatures />
      <Footer />
    </div>
  );
};

export default MainHome;
