import { Outlet, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MainCoursesList from "../../components/courses/list/MainCoursesList";

const CoursesPage = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <div className="py-8">{id ? <Outlet /> : <MainCoursesList />}</div>
      <Footer />
    </>
  );
};

export default CoursesPage;
