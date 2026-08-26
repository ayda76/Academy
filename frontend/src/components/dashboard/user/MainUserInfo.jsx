import { BiBookAdd, BiLogoGmail, BiMap, BiPhone } from "react-icons/bi";
import { PiPencilSimpleFill } from "react-icons/pi";
import useUser from "../../../hooks/auth/useUser";
import Loading from "../../../ui/Loading";
import { Link } from "react-router-dom";
import UserInfoItem from "./UserInfoItem";

const MainUserInfo = () => {
  const { user, isLoadingUser } = useUser();

  const infoItems = [
    {
      id: 1,
      icon: BiLogoGmail,
      label: "ایمیل",
      value: user?.email || "___",
    },
    {
      id: 2,
      icon: BiPhone,
      label: "شماره موبایل",
      value: user?.phone || "___",
    },
    {
      id: 3,
      icon: BiMap,
      label: "آدرس",
      value: user?.address || "___",
    },
    {
      id: 4,
      icon: BiBookAdd,
      label: "دوره‌های ثبت‌نام شده",
      value: user?.all_courses?.length ?? 0,
    },
  ];

  if (isLoadingUser) return <Loading />;

  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-semibold text-base text-secondary-900">
          اطلاعات من
        </h4>
        <Link
          to="edit"
          className="inline-flex items-center gap-1.5 text-xs text-purple-800 border border-purple-800 hover:bg-purple-50 px-3 py-1.5 rounded-lg transition"
        >
          <PiPencilSimpleFill />
          ویرایش اطلاعات
        </Link>
      </div>

      <div className="rounded-2xl border border-secondary-200 divide-y divide-secondary-100 overflow-hidden">
        {infoItems.map((item) => {
          const Icon = item.icon;
          return <UserInfoItem key={item?.id} Icon={Icon} {...item} />;
        })}
      </div>
    </div>
  );
};

export default MainUserInfo;
