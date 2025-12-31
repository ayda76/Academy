import { Link } from "react-router-dom";

const MainCertification = () => {
  return (
    <div className="container p-5 flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
      <section className="space-y-6">
        <h4 className="text-purple-800 font-semibold text-lg">
          یادگیری و گواهینامه
        </h4>
        <p className="text-sm lg:text-base max-w-125 leading-8 text-secondary-700">
          با کسب نمره قبولی در آزمون‌ها، گواهینامه رسمی پایان دوره به دو زبان
          فارسی و انگلیسی به شما اعطا می‌شود. علاوه بر دانلود و ذخیره، امکان
          اشتراک‌گذاری مستقیم گواهینامه در لینکدین نیز فراهم است.
        </p>
        <Link
          to={"/courses"}
          className="bg-purple-800 border border-purple-800 text-white hover:bg-white hover:text-purple-800 hover:shadow-md p-1.5 px-5 text-sm rounded-lg text-center"
        >
          شروع یادگیری
        </Link>
      </section>
      <div className="h-50 md:h-75 flex">
        <img
          src="/assets/images/certificate2.svg"
          alt="گواهینامه"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default MainCertification;
