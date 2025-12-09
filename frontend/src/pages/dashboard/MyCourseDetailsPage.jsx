import { useNavigate, useParams } from "react-router-dom";
import useCourseMe from "../../hooks/courses/useCourseMe";
import { PiArrowLeftLight } from "react-icons/pi";
import useMoveBack from "../../hooks/useMoveBack";
import Loading from "../../ui/Loading";
// import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/auth/useUser";
import MyCourseDEtails from "../../components/dashboard/course/MyCourseDEtails";

const MyCourseDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { myCourse, isLoadingCourse } = useCourseMe();
  const courseList = !myCourse || myCourse === "error" ? [] : myCourse;
  console.log(courseList, myCourse);
  const courseDetails = courseList?.find((c) => c?.id === +id);
  const isAccess = courseDetails?.id || null;
  console.log(isAccess, id);

  return isLoadingCourse ? (
    <Loading />
  ) : (
    <div>
      <div className="px-5 flex justify-end mb-4">
        <button
          onClick={() => navigate("/dashboard/course")}
          className="flex items-center gap-x-2 cursor-pointer"
        >
          <span> بازگشت</span>
          <PiArrowLeftLight className="text-primary-900" />
        </button>
      </div>
      {!isAccess ? (
        <p className="text-sm font-semibold text-secondary-700 text-center">
          به این بخش دسترسی ندارید
        </p>
      ) : (
        <MyCourseDEtails />
      )}
    </div>
  );
};

export default MyCourseDetailsPage;
