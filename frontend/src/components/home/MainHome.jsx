import Footer from "../footer/Footer";
import Hero from "../header/Hero";
import MainCertification from "./certification/MainCertification";
import MainFeatures from "./features/MainFeatures";
import MainPopularCourse from "./popular-course/MainPopularCourse";

const MainHome = () => {
  return (
    <>
      <Hero />
      <MainPopularCourse />
      <MainCertification />
      <MainFeatures />
      <Footer />
    </>
  );
};

export default MainHome;
