import useCourseDetails from "../../../../hooks/courses/useCourseDetails";
import Loading from "../../../../ui/Loading";
import MainCreateCourse from "./MainCreateCourse";

const MainEditCourse = () => {
  const { course, isLoading } = useCourseDetails();
  return isLoading ? (
    <Loading />
  ) : !course?.id ? (
    <p className="text-sm text-secondary-700 text-center pt-20">
      موردی یافت نشد.
    </p>
  ) : (
    <MainCreateCourse course={course} />
  );
};

export default MainEditCourse;
