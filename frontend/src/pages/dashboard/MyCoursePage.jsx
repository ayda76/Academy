import { Outlet, useParams } from "react-router-dom";
import MainMyCourse from "../../components/dashboard/course/MainMyCourse";

const MyCoursePage = () => {
  const { id } = useParams();
  return id ? <Outlet /> : <MainMyCourse />;
};

export default MyCoursePage;
