import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useGetCourses from "../../../../hooks/courses/useGetCourses";
import CourseRow from "./CourseRow";
import Paginate from "../../../../ui/Paginate";

const MainAdminCoursesList = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const [params, setParams] = useState({ page });
  const { coursesList, isLoadingCourses, isFetching } = useGetCourses(params);
  const courses = coursesList?.results;
  const npage = Math.ceil(coursesList?.count / 3);
  return (
    <div className="flex flex-col gap-y-8">
      <h4>لیست دوره‌ها</h4>
      <Link
        className="text-sm text-purple-900 border border-purple-900 rounded-lg w-fit py-2 px-4"
        to={"/admin/courses/create"}
      >
        ایجاد دوره
      </Link>
      <div className="min-w-[300px] w-full max-w-[500px] overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>نام</th>
              <th>سازمان</th>
              <th>قیمت</th>
              <th>نوع دوره</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {isLoadingCourses || isFetching ? (
              <tr>
                <td colSpan="5">
                  <div className="flex items-center justify-center p-5">
                    <span>در حال بارگذاری...</span>
                  </div>
                </td>
              </tr>
            ) : courses?.length < 1 ? (
              <tr>
                <td colSpan="5">
                  <div className="flex items-center justify-center p-5">
                    <span>موردی یافت نشد</span>
                  </div>
                </td>
              </tr>
            ) : (
              courses?.map((course) => (
                <CourseRow key={course?.id} course={course} />
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="min-w-[300px] w-full max-w-[500px]">
        {!isLoadingCourses && !isFetching && courses?.length > 0 && (
          <Paginate pageCount={npage} setParams={setParams} />
        )}
      </div>
    </div>
  );
};

export default MainAdminCoursesList;
