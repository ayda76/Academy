import { PiLockSimpleLight } from "react-icons/pi";

const CourseLesson = ({ lesson, index }) => {
  return (
    <div className="bg-secondary-50 p-4 border-b border-secondary-200/80 last:border-none flex items-center justify-between">
      <div className="flex items-start gap-2">
        <span className="text-sm text-secondary-600">درس {index} :</span>
        <span className="text-sm">{lesson?.name}</span>
      </div>
      {/* <a href={lesson?.articles[0]?.file_doc} download>دانلود</a> */}
      <PiLockSimpleLight />
    </div>
  );
};

export default CourseLesson;
