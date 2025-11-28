import useUser from "../../../hooks/auth/useUser";
import useCourseMe from "../../../hooks/courses/useCourseMe";
import Loading from "../../../ui/Loading";

const MainMyCourse = () => {
  const { user } = useUser();
  const { myCourse, isLoadingCourse } = useCourseMe(user?.id);
  console.log(myCourse);
  return isLoadingCourse ? (
    <Loading />
  ) : (
    <div className="space-y-4 px-5">
      <h3 className="text-purple-700 font-semibold text-sm md:text-base">
        دوره‌های من
      </h3>
    </div>
  );
};

export default MainMyCourse;
