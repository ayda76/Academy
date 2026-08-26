import CourseSlider from "./CourseSlider";

const MainPopularCourse = () => {
  return (
    <section className="relative overflow-hidden py-16">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(107, 33, 168, 0.06), transparent 40%), radial-gradient(circle at 85% 15%, rgba(219, 39, 119, 0.05), transparent 45%), radial-gradient(circle at 50% 100%, rgba(107, 33, 168, 0.04), transparent 50%), linear-gradient(180deg, #fbfaff 0%, #f9fafb 100%)",
        }}
      />

      {/* بکگراند نقطه‌ای */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #a855f7 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      {/* بکگراند موج دار*/}
      <svg
        className="absolute bottom-0 left-0 w-full text-white"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,32 C240,60 480,0 720,16 C960,32 1200,64 1440,32 L1440,60 L0,60 Z"
        />
      </svg>

      <div className="container relative px-5">
        <CourseSlider />
      </div>
    </section>
  );
};

export default MainPopularCourse;
