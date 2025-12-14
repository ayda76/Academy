import { useNavigate, useParams } from "react-router-dom";
import { PiArrowLeftLight } from "react-icons/pi";
import Loading from "../../ui/Loading";
import useUser from "../../hooks/auth/useUser";
import MyCourseDEtails from "../../components/dashboard/course/MyCourseDEtails";

const MyCourseDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isLoadingUser } = useUser();
  const courseDetails = user?.all_courses?.some((courseId) => courseId === +id);
  console.log(courseDetails);
  const isAccess = courseDetails || false;
  console.log(isAccess, id);

  return isLoadingUser ? (
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
