import FeatureItem from "./FeatureItem";

const MainFeatures = () => {
  const features = [
    {
      id: 1,
      src: "/assets/images/certificate-icon.svg",
      alt: "گواهینامه",
      text: "گواهینامه پایان دوره",
    },
    {
      id: 2,
      src: "/assets/images/time-icon.svg",
      alt: "ساعت آموزش",
      text: "هزاران ساعت آموزش",
    },
    {
      id: 3,
      src: "/assets/images/course-icon.svg",
      alt: "دسترسی",
      text: "دسترسی آنی و همیشگی",
    },
    {
      id: 4,
      src: "/assets/images/quality-icon.svg",
      alt: "کیفیت",
      text: "تضمین کیفیت آموزش‌ها",
    },
  ];
  return (
    <div className="bg-secondary-50 py-10 my-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 container">
        {features?.map((feature) => (
          <FeatureItem key={feature?.id} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default MainFeatures;
