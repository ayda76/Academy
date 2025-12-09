import { Link } from "react-router-dom";

const EmptyEnroll = () => {
  return (
    <div className="flex flex-col gap-4 mt-8 items-center">
      <div className="w-[250px] h-[200px]">
        <img
          src="/assets/images/course/empty.svg"
          alt="موردی یافت نشد"
          className="w-[250px]"
        />
      </div>
      <span className="text-secondary-700 text-sm">دوره‌ای ثبت‌نام نکردید</span>
      <Link
        to={"/courses"}
        className="bg-purple-800 border border-purple-800 text-white hover:bg-white hover:text-purple-800 hover:shadow-md p-1.5 px-5 text-sm rounded-lg text-center w-fit"
      >
        مشاهده دوره‌ها
      </Link>
    </div>
  );
};

export default EmptyEnroll;
