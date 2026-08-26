import {
  PiCertificateFill,
  PiClockCountdownFill,
  PiLightningFill,
  PiShieldCheckFill,
} from "react-icons/pi";
import FeatureItem from "./FeatureItem";

const MainFeatures = () => {
  const features = [
    {
      id: 1,
      icon: PiCertificateFill,
      text: "گواهینامه پایان دوره",
      desc: "معتبر و قابل اشتراک‌گذاری",
    },
    {
      id: 2,
      icon: PiClockCountdownFill,
      text: "هزاران ساعت آموزش",
      desc: "محتوای تخصصی و به‌روز",
    },
    {
      id: 3,
      icon: PiLightningFill,
      text: "دسترسی آنی و همیشگی",
      desc: "همیشه و همه‌جا در دسترس",
    },
    {
      id: 4,
      icon: PiShieldCheckFill,
      text: "تضمین کیفیت آموزش‌ها",
      desc: "بازبینی‌شده توسط متخصصان",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-secondary-50 py-16 md:py-20">
      <div className="absolute -top-24 left-1/4 w-72 h-72 bg-purple-200 rounded-full blur-[110px] opacity-30" />
      <div className="absolute -bottom-24 right-1/4 w-72 h-72 bg-pink-200 rounded-full blur-[110px] opacity-25" />

      {/* بکگراند نقطه‌ای */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c4b5fd 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 50%, black 20%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 50%, black 20%, transparent 90%)",
        }}
      />

      <div className="container relative px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return <FeatureItem key={feature?.id} {...feature} Icon={Icon} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;
