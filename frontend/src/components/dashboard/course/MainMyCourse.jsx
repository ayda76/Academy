import useUser from "../../../hooks/auth/useUser";
import useCourseMe from "../../../hooks/courses/useCourseMe";
// import useAuth from "../../../hooks/useAuth";
import Loading from "../../../ui/Loading";
import CourseItem from "./CourseItem";
import EmptyEnroll from "./EmptyEnroll";

const MainMyCourse = () => {
  // const { user } = useUser();
  // const { myCourse, isLoadingCourse, isLoadingUser ,user} = useAuth();
  const { isLoadingUser, user } = useUser();
  const { myCourse, isLoadingCourse } = useCourseMe();
  const courseList = !myCourse || myCourse === "error" ? [] : myCourse;
  console.log(courseList, myCourse, user?.id);
  return isLoadingCourse ? (
    <Loading />
  ) : (
    <div className="space-y-4 px-5">
      <h3 className="text-purple-700 font-semibold text-sm md:text-base">
        دوره‌های من
      </h3>
      <>
        {courseList?.length < 1 ? (
          <EmptyEnroll />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {courseList?.map((course) => (
              <CourseItem key={course?.id} course={course} />
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default MainMyCourse;
