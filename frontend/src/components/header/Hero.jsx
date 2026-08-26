import { Link } from "react-router-dom";
import { PiArrowLeftBold, PiSparkleFill } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-40 -left-10 w-60 h-60 bg-pink-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-10 right-1/3 w-4 h-4 bg-pink-400 rounded-full hidden md:block" />
      <div className="absolute bottom-10 left-1/4 w-3 h-3 bg-purple-400 rounded-full hidden md:block" />

      <div className="container relative px-5 pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-right order-2 md:order-1">
            <span className="inline-flex items-center gap-1.5 text-purple-700 bg-white border border-purple-200 shadow-sm text-xs font-medium px-3 py-1.5 rounded-full mb-5">
              <PiSparkleFill className="text-purple-500" />
              بیش از ۵۰۰۰ دانشجوی آنلاین
            </span>

            <h1 className="text-2xl md:text-4xl font-bold text-secondary-900 leading-tight mb-4">
              آموزش آنلاین،{" "}
              <span className="relative inline-block text-purple-800">
                ساده‌تر
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="8"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 25 0, 50 4 T 100 3"
                    stroke="#ec4899"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              از همیشه
            </h1>

            <p className="text-sm md:text-base leading-7 md:leading-8 text-secondary-500 mb-8 max-w-md">
              دوره‌های تخصصی و پروژه‌محور، با مسیر یادگیری مشخص و پشتیبانی
              مداوم. به سطح بعدی مهارتت خوش اومدی.
            </p>

            <Link
              to="/courses"
              className="group inline-flex items-center gap-2 bg-purple-800 border border-purple-800 text-white font-medium hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-800/25 transition-all py-3 px-6 rounded-xl text-sm"
            >
              شروع یادگیری
              <PiArrowLeftBold className="transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>

          <div className="relative flex justify-center order-1 md:order-2">
            <div className="absolute w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-purple-200 via-pink-100 to-purple-100 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] blur-2xl opacity-70 animate-pulse" />
            <img
              src="/assets/images/hero3.svg"
              alt="آموزش آنلاین"
              className="relative w-[220px] md:w-[380px] drop-shadow-xl"
            />
            <div className="absolute bottom-2 md:bottom-6 -left-2 md:left-0 bg-white shadow-lg rounded-2xl px-4 py-2.5 flex items-center gap-2 border border-purple-100">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-secondary-700">
                ۱۲۰+ دوره فعال
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
