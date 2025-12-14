import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useEnroll from "../hooks/courses/useEnroll";
import useUser from "../hooks/auth/useUser";

const EnrollButton = ({ courseId, courseName, has_term, termId }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isLoadingUser, user } = useUser();
  console.log(user);
  const isEnroll = user?.all_courses?.some((id) => id === courseId);
  const { enrollCourseFn, isPending } = useEnroll();

  const enrollHandler = () => {
    if (!user?.id) {
      navigate("/auth/signin", { state: { from: pathname } });
      toast.error("برای ثبت‌نام در این دوره وارد حساب کاربری خود شوید.");
      return;
    } else if (!user?.firstname) {
      navigate("/auth/complete-profile", { state: { from: pathname } });
      toast.error("برای ثبت‌نام در این دوره اطلاعات خود را تکمیل کنید.");
      return;
    }
    const formData = {
      term_id: termId,
    };
    console.log(formData);
    enrollCourseFn(formData, {
      onSuccess: () => {
        toast.success(`دوره ${courseName} باموفقیت ثبت‌نام شد`);
        navigate("/dashboard/course");
      },
    });
  };
  return (
    <div className="w-50 lg:w-full">
      {isLoadingUser ? (
        <div className="w-full p-4 rounded-xl bg-secondary-200 animate-pulse"></div>
      ) : user?.id && isEnroll ? (
        <div className="w-full p-1.5 rounded-xl text-center bg-purple-900">
          <span className="text-xs text-white md:text-sm">
            شما دانشجو دوره هستید
          </span>
        </div>
      ) : has_term ? (
        <button
          onClick={enrollHandler}
          disabled={isPending}
          className="w-full p-1.5 cursor-pointer rounded-xl text-center bg-purple-900 disabled:cursor-not-allowed disabled:bg-secondary-400"
        >
          <span className="text-xs text-white md:text-sm">ثبت‌نام</span>
        </button>
      ) : (
        <div className="w-full p-1.5 rounded-xl text-center bg-purple-900">
          <span className="text-xs text-white md:text-sm">
            مهلت ثبت‌نام تمام شده
          </span>
        </div>
      )}
    </div>
  );
};

export default EnrollButton;
