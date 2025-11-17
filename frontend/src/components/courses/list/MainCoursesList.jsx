import { useSearchParams } from "react-router-dom";
import useGetCourses from "../../../hooks/courses/useGetCourses";
import CourseCard from "../../../ui/CourseCard";
import Paginate from "../../../ui/Paginate";
import { useState } from "react";
import SearchBox from "./SearchBox";
import PriceRangeSlider from "./filter/PriceRangeSlider";

const MainCoursesList = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const [params, setParams] = useState({ page });
  const { coursesList, isLoadingCourses } = useGetCourses(params);
  const courses = coursesList?.results;
  const npage = Math.ceil(coursesList?.count / 3);
  console.log(npage);
  console.log(coursesList);
  return (
    <div className="space-y-4 container px-5 2xl:px-0">
      <SearchBox params={params} setParams={setParams} />
      <div className="flex items-start gap-3 xl:gap-8">
        <div className="hidden md:block w-[250px] border border-gray-200 rounded-xl p-4 space-y-3">
          <h4 className="font-bold text-sm text-purple-900">فیلترها</h4>
          <PriceRangeSlider />
        </div>
        <div className="min-h-[60vh] w-full md:w-[calc(100%-250px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
            {courses?.length < 1 ? (
              <div>not found</div>
            ) : (
              courses?.map((course) => (
                <CourseCard key={course?.id} course={course} />
              ))
            )}
          </div>
        </div>
      </div>
      <Paginate pageCount={npage} setParams={setParams} />
    </div>
  );
};

export default MainCoursesList;
