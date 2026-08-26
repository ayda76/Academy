import { PiArrowLeftBold, PiSealCheckFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const MainCertification = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="container relative px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
          <section className="flex flex-col items-center md:items-start text-center md:text-right gap-4 md:max-w-lg">
            <span className="inline-flex items-center gap-1.5 text-purple-700 bg-white border border-purple-200 shadow-sm text-xs font-medium px-3 py-1.5 rounded-full">
              <PiSealCheckFill className="text-purple-500" />
              گواهینامه معتبر بین‌المللی
            </span>

            <h4 className="text-purple-900 font-bold text-lg md:text-xl">
              یادگیری و گواهینامه
            </h4>

            <p className="text-sm lg:text-base leading-8 text-secondary-600">
              با کسب نمره قبولی در آزمون‌ها، گواهینامه رسمی پایان دوره به دو
              زبان فارسی و انگلیسی به شما اعطا می‌شود. علاوه بر دانلود و ذخیره،
              امکان اشتراک‌گذاری مستقیم گواهینامه در لینکدین نیز فراهم است.
            </p>

            <Link
              to="/courses"
              className="group inline-flex items-center gap-2 bg-purple-800 border border-purple-800 text-white font-medium hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-800/20 transition-all py-3 px-6 rounded-xl text-sm mt-2"
            >
              شروع یادگیری
              <PiArrowLeftBold className="transition-transform group-hover:-translate-x-1" />
            </Link>
          </section>

          <div className="w-full max-w-[220px] md:max-w-[420px]">
            <img
              src="/assets/images/certificate2.svg"
              alt="گواهینامه"
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCertification;
