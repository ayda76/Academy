import { BiBookAdd, BiLogoGmail, BiMap, BiPhone } from "react-icons/bi";
import useUser from "../../../hooks/auth/useUser";
import Loading from "../../../ui/Loading";
import useCourseMe from "../../../hooks/courses/useCourseMe";
const MainUserInfo = () => {
  const { user } = useUser();
  const { myCourse, isLoadingCourse } = useCourseMe(user?.id);
  console.log(myCourse);
  return isLoadingCourse ? (
    <Loading />
  ) : (
    <div className="space-y-4 px-5">
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <BiLogoGmail className="text-purple-900 text-xl leading-none" />
          <span className="text-sm text-secondary-600 leading-none">
            ایمیل :
          </span>
        </div>
        <span className="text-secondary-800 text-sm">{user?.email}</span>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <BiPhone className="text-purple-900 text-xl leading-none" />
          <span className="text-sm text-secondary-600 leading-none">
            شماره موبایل :
          </span>
        </div>
        <span className="text-secondary-800 text-sm">
          {0 + user?.phone || "___"}
        </span>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <BiMap className="text-purple-900 text-xl leading-none" />
          <span className="text-sm text-secondary-600 leading-none">
            آدرس :
          </span>
        </div>
        <span className="text-secondary-800 text-sm">
          {user?.address || "___"}
        </span>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <BiBookAdd className="text-purple-900 text-xl leading-none" />
          <span className="text-sm text-secondary-600 leading-none">
            دوره‌های ثبت‌نام شده :
          </span>
        </div>
        <span className="text-secondary-800 text-sm">{myCourse?.length}</span>
      </div>
    </div>
  );
};

export default MainUserInfo;
