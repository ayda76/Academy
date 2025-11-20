const NotFoundCourse = () => {
  return (
    <div className="w-full flex flex-col gap-8 justify-center items-center">
      <span className="text-sm font-semibold text-secondary-800">
        موردی یافت نشد.
      </span>
      <img src="/assets/images/course/empty.svg" alt="موردی یافت نشد" className="w-[250px]" />
    </div>
  );
};

export default NotFoundCourse;
