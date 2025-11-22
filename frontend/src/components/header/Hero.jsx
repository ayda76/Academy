import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 container pt-8">
      <div className="flex justify-center">
        <img
          src="/assets/images/hero3.svg"
          className="w-[250px] md:w-[320px]"
        />
      </div>
      <div className="space-y-4 flex flex-col items-center md:items-start md:pt-15">
        <h1 className="text-lg font-semibold text-purple-800">
          آموزش آنلاین، ساده‌تر از همیشه
        </h1>
        <p className="text-sm leading-7 text-secondary-600 px-5 md:px-0 md:pb-6 text-center md:text-right">
          دوره‌های تخصصی و پروژه محور، با مسیر یادگیری مشخص و پشتیبانی مداوم.{" "}
          <br />
          به سطح بعدی مهارتت خوش اومدی.
        </p>
        <Link
          to={"/courses"}
          className="bg-purple-800 border border-purple-800 text-white hover:bg-white hover:text-purple-800 hover:shadow-md p-1.5 px-5 text-sm rounded-lg text-center"
        >
          شروع یادگیری
        </Link>
      </div>
    </div>
  );
};

export default Hero;
