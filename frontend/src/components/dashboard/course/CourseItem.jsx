import { Link } from "react-router-dom";

const CourseItem = ({ course }) => {
  return (
    <main className="w-full max-w-[250px] mx-auto">
      <Link to={`/dashboard/course/${course?.id}`}>
        <div className="rounded-xl flex flex-col gap-2 border border-gray-200 bg-secondary-50/30 p-3 shadow-sm hover:shadow-md transition">
          {/* عکس */}
          <div className="w-full aspect-9/5 overflow-hidden rounded-md bg-gray-100">
            <img
              src={course?.image || "/assets/images/course/not-found.jpg"}
              alt={course?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-base font-bold line-clamp-1 text-gray-700">
            {course?.name}
          </span>
        </div>
      </Link>
    </main>
  );
};

export default CourseItem;
