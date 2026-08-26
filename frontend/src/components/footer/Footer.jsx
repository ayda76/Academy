import { Link } from "react-router-dom";
import {
  PiMapPinFill,
  PiPhoneFill,
  PiEnvelopeFill,
  PiInstagramLogoFill,
  PiTelegramLogoFill,
  PiLinkedinLogoFill,
} from "react-icons/pi";
import NavLink from "./NavLink";

const Footer = () => {
  const quickLinks = [
    { label: "صفحه اصلی" },
    { label: "دوره‌ها" },
    { label: "درباره ما" },
    { label: "تماس با ما" },
  ];

  const socials = [
    { icon: PiInstagramLogoFill, href: "#" },
    { icon: PiTelegramLogoFill, href: "#" },
    { icon: PiLinkedinLogoFill, href: "#" },
  ];

  const infoContact = [
    { label: "تهران، خیابان ولیعصر، بلوار کشاورز", icon: PiMapPinFill },
    { label: "021265706 - 0912345678", icon: PiPhoneFill },
    { label: "info@academy.com", icon: PiEnvelopeFill },
  ];

  return (
    <footer className="relative bg-secondary-100 mt-8">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-purple-300 via-purple-500 to-pink-300" />

      <div className="container px-5 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1.3fr] gap-10 md:gap-8 pb-10 border-b border-secondary-300">
          <div className="flex flex-col items-center md:items-start text-center md:text-right gap-4">
            <div className="text-2xl font-bold text-purple-900">آکادمی</div>
            <p className="text-sm leading-7 text-secondary-600 max-w-xs">
              آموزش آنلاین تخصصی و پروژه‌محور با مسیر یادگیری مشخص و پشتیبانی
              مداوم، در کنار شما تا رسیدن به مهارت بعدی.
            </p>
            <div className="flex gap-3">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-secondary-200 hover:bg-purple-800 hover:border-purple-800 text-secondary-600 hover:text-white transition"
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <h6 className="font-semibold text-purple-900 mb-1">دسترسی سریع</h6>
            {quickLinks.map((link, index) => (
              <NavLink key={index} label={link.label} />
            ))}
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <h6 className="font-semibold text-purple-900 mb-1">تماس با ما</h6>
            {infoContact.map((info, index) => {
              const Icon = info.icon;
              return (
                <NavLink
                  key={index}
                  label={info.label}
                  Icon={Icon}
                  isHover={false}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-xs text-secondary-500">
            تمامی حقوق سایت برای آکادمی محفوظ می‌باشد.
          </p>
          <img
            src="/assets/images/footer.webp"
            alt="نماد اعتماد"
            className="w-16 h-16"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
