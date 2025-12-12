import { Link } from "react-router-dom";
import priceType from "../utils/priceType";

const CourseCard = ({ course }) => {
  return (
    <main className="w-full max-w-[250px] mx-auto">
      <Link to={`/courses/${course?.id}`}>
        <div className="rounded-xl flex flex-col gap-2 border border-gray-200 bg-secondary-50/30 p-3 shadow-sm hover:shadow-md transition relative">
          {!course?.has_term && course?.is_online && (
            <div className="absolute text-red-700 text-sm font-semibold bg-gray-50 top-4 left-0 -rotate-30 px-2 rounded-md">
              <span>برگزار شده</span>
            </div>
          )}
          {/* عکس */}
          <div className="w-full aspect-9/5 overflow-hidden rounded-md bg-gray-100">
            <img
              src={course?.image || "/assets/images/course/not-found.jpg"}
              alt={course?.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* نام  */}
          <span className="text-base font-bold line-clamp-1 text-gray-700">
            {course?.name}
          </span>

          <div className="flex items-center gap-3">
            {/* آنلاین یا آفلاین */}
            <span
              className={`${course?.is_online ? "bg-pink-100 text-pink-900" : "bg-primary-50 text-primary-900"} w-fit my-2 text-xs px-3 py-1 rounded-full font-semibold`}
            >
              {course?.is_online ? "آنلاین" : "آفلاین"}
            </span>
            {/* سازمان */}
            <span className="w-fit my-2 text-xs bg-purple-100 text-purple-900 px-3 py-1 rounded-full font-semibold">
              {course?.organization?.name}
            </span>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <strong className="text-sm font-semibold text-secondary-700">
              {priceType(+course?.price)} تومان
            </strong>
          </div>
        </div>
      </Link>
    </main>
  );
};

export default CourseCard;
