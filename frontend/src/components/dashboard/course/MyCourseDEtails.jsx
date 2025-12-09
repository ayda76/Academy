import useCourseDetails from "../../../hooks/courses/useCourseDetails";
import LessonAccordion from "../../../ui/LessonAccordion";
import Loading from "../../../ui/Loading";

const MyCourseDEtails = () => {
  const { course, isLoading } = useCourseDetails();
  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col gap-4 w-full md:w-[500px]">
      <span>درس های دوره {course?.name}</span>
      <div>
        {course?.lessons_related?.map((lesson, index) => (
          <LessonAccordion
            index={index + 1}
            isEnroll={true}
            lesson={lesson}
            key={lesson?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCourseDEtails;
