import CourseCardLoading from "../../../ui/CourseCardLoading";

const CourseLoading = () => {
  const array = Array.from({ length: 3 });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      {array?.map((arr, index) => (
        <CourseCardLoading key={index} />
      ))}
    </div>
  );
};

export default CourseLoading;
