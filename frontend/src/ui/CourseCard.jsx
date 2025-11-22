import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <main className="w-full max-w-[250px] mx-auto">
      <Link to={`/courses/${course?.id}`}>
        <div className="rounded-xl flex flex-col gap-2 border border-gray-200 bg-secondary-50/30 p-3 shadow-sm hover:shadow-md transition">
          {/* عکس */}
          <div className="w-full aspect-9/5 overflow-hidden rounded-md bg-gray-100">
            <img
              src={course?.image || "/assets/images/course/not-found.jpg"}
              alt={course?.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* نام و قیمت */}
          <span className="text-base font-bold line-clamp-1 text-gray-700">
            {course?.name}
          </span>

          {/* سازمان */}
          <span className="w-fit my-2 text-xs bg-purple-100 text-purple-900 px-3 py-1 rounded-full font-semibold">
            {course?.organization?.name}
          </span>
          <div className="border-t border-gray-200 pt-3">
            <strong className="text-sm font-semibold text-secondary-700">
              {+course?.price} تومان
            </strong>
          </div>
        </div>
      </Link>
    </main>
  );
};

export default CourseCard;
