import {
  PiArticle,
  PiCaretDown,
  PiLockSimpleLight,
  PiVideo,
} from "react-icons/pi";
import { useState } from "react";
// import useAuth from "../../../hooks/useAuth";
import useCourseMe from "../../../hooks/courses/useCourseMe";
import useUser from "../../../hooks/auth/useUser";
import LessonAccordion from "../../../ui/LessonAccordion";

const CourseLesson = ({ lesson, index, courseId }) => {
  const { user } = useUser();
  // const { myCourse, isLoadingCourse, isLoadingUser, user } = useAuth();
  // const { isLoadingUser } = useUser();
  const { myCourse, isLoadingCourse } = useCourseMe();
  const course = !myCourse || myCourse === "error" ? [] : myCourse;
  const isEnroll = user?.id && course?.some((c) => c?.id === courseId);
  return <LessonAccordion isEnroll={isEnroll} lesson={lesson} index={index}  />;
};

export default CourseLesson;
