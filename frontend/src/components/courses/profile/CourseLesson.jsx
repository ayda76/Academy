import {
  PiArticle,
  PiCaretDown,
  PiLockSimpleLight,
  PiVideo,
} from "react-icons/pi";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const CourseLesson = ({ lesson, index, courseId }) => {
  // const { user } = useUser();
  const { myCourse, isLoadingCourse, isLoadingUser, user } = useAuth();
  const course = !myCourse || myCourse === "error" ? [] : myCourse;
  const isEnroll = user?.id && course?.some((c) => c?.id === courseId);
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-secondary-200/80 last:border-none">
      <div
        onClick={() => {
          isEnroll && setOpen(!open);
        }}
        className={`bg-secondary-50 p-4 flex items-center justify-between
          ${isEnroll ? "cursor-pointer" : "cursor-default"}`}
      >
        <div className="flex items-start gap-2">
          <span className="text-sm text-secondary-400">درس {index} :</span>
          <span className="text-sm">{lesson?.name}</span>
        </div>
        {/* <a href={lesson?.articles[0]?.file_doc} download>دانلود</a> */}
        {!isEnroll ? (
          <PiLockSimpleLight />
        ) : (
          <PiCaretDown
            className={`${open ? "rotate-0" : "rotate-90"} transition-transform duration-100`}
          />
        )}
      </div>
      {open && (
        <div className="flex flex-col gap-3 p-5 pt-2 bg-secondary-50">
          {lesson?.articles?.length < 1 ? (
            <span className="text-secondary-600 text-sm">مقاله ندارد</span>
          ) : (
            lesson?.articles?.map((article, index) => (
              <a
                key={index}
                href={article?.file_doc}
                download={article?.file_doc}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-secondary-600"
              >
                <PiArticle className="text-xl" />
                <span className="text-sm">مقاله {index + 1}</span>
              </a>
            ))
          )}
          {lesson?.video && (
            <>
              <a
                href={lesson?.video}
                download={lesson?.video}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-secondary-600"
              >
                <PiVideo className="text-xl" />
                <span className="text-sm">دانلود ویدیو </span>
              </a>
              <video
                src={lesson?.video}
                controls
                className="max-w-[400px] aspect-video"
              ></video>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseLesson;
