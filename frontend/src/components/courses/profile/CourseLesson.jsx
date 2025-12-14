import useUser from "../../../hooks/auth/useUser";
import LessonAccordion from "../../../ui/LessonAccordion";

const CourseLesson = ({ lesson, index, courseId }) => {
  const { user } = useUser();
  const isEnroll = user?.id && user?.all_courses?.some((id) => id === courseId);
  return <LessonAccordion isEnroll={isEnroll} lesson={lesson} index={index} />;
};

export default CourseLesson;
