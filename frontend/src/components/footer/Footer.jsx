import { PiMapPinFill, PiPhoneFill } from "react-icons/pi";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-8 py-8 mt-8 bg-secondary-100 rounded-tr-4xl rounded-tl-4xl">
      <div className="w-full lg:w-5xl xl:w-6xl flex flex-col gap-3 md:gap-0 items-center md:flex-row justify-between mx-auto h-full px-4">
        <div className=" flex flex-col gap-4">
          <NavLink />
          <span className="text-secondary-700 flex items-start gap-1 border-t border-t-secondary-600/40 py-4 w-fit">
            <PiMapPinFill className="text-xl text-purple-800 w-10 md:w-fit" />
            <p className="text-sm md:text-base">آدرس: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </span>
          <span className="text-secondary-700 flex items-center gap-1">
            <PiPhoneFill className="text-xl text-purple-800 w-10 md:w-fit" />
            تلفن: 021111111 - 0919111111
          </span>
        </div>
        <img
          src="/assets/images/footer.webp"
          alt="آکادمی"
          className="w-30 h-30"
        />
      </div>
      <p className="text-sm text-center text-purple-800">
        تمامی حقوق سایت برای آکادمی محفوظ می باشد.
      </p>
      {/* <ButtonToTop /> */}
    </footer>
  );
};

export default Footer;
