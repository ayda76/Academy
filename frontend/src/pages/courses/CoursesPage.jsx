import { Outlet, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import MainCoursesList from "../../components/courses/list/MainCoursesList";

const CoursesPage = () => {
  const { id } = useParams();
  return (
    <>
      <div>{id ? <Outlet /> : <MainCoursesList />}</div>
      <Footer />
    </>
  );
};

export default CoursesPage;
