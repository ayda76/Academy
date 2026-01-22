import useGetLessonById from "../../../../hooks/lesson/useGetLessonById";
import Loading from "../../../../ui/Loading";
import MainCreateLesson from "./MainCreateLesson";

const MainEditLesson = () => {
  const { data, isLoading } = useGetLessonById();
  return isLoading ? (
    <Loading />
  ) : !data?.id ? (
    <p className="text-sm text-secondary-700 text-center pt-20">
      موردی یافت نشد.
    </p>
  ) : (
    <MainCreateLesson lessonData={data} />
  );
};

export default MainEditLesson;
