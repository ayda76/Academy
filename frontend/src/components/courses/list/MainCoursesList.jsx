import { useSearchParams } from "react-router-dom";
import useGetCourses from "../../../hooks/courses/useGetCourses";
import CourseCard from "../../../ui/CourseCard";
import Paginate from "../../../ui/Paginate";
import { useState } from "react";
import SearchBox from "./SearchBox";
import CourseLoading from "./CourseLoading";
import NotFoundCourse from "./NotFoundCourse";
import CourseFilter from "./filter/CourseFilter";
import { PiArrowsDownUpLight } from "react-icons/pi";
import Modal from "../../../ui/Modal";

const MainCoursesList = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const [params, setParams] = useState({ page });
  const { coursesList, isLoadingCourses } = useGetCourses(params);
  const courses = coursesList?.results;
  const npage = Math.ceil(coursesList?.count / 3);
  console.log(coursesList);
  return (
    <>
      {filterOpen && (
        <div className="fixed h-screen w-full z-50 bg-white top-0 left-0 flex justify-center">
          <CourseFilter
            setParams={setParams}
            params={params}
            setFilterOpen={setFilterOpen}
          />
        </div>
      )}
      <div className="space-y-4 container py-8 px-5 2xl:px-0">
        <div className="flex items-center justify-between mb-6">
          <SearchBox params={params} setParams={setParams} />
          <button
            onClick={() => setFilterOpen(true)}
            className="md:hidden flex items-center gap-1 text-secondary-600"
          >
            <PiArrowsDownUpLight className="text-lg" />
            <span className="text-sm">فیلتر</span>
          </button>
        </div>
        <div className="flex items-start gap-3 xl:gap-8">
          <div className="hidden md:block w-[250px] border border-gray-200 rounded-xl">
            <CourseFilter
              setParams={setParams}
              params={params}
              setFilterOpen={setFilterOpen}
            />
          </div>
          <div className="min-h-[60vh] w-full md:w-[calc(100%-250px)]">
            {isLoadingCourses ? (
              <CourseLoading />
            ) : courses?.length < 1 ? (
              <NotFoundCourse />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                {courses?.map((course) => (
                  <CourseCard key={course?.id} course={course} />
                ))}
              </div>
            )}
          </div>
        </div>
        {!isLoadingCourses && courses?.length > 0 && (
          <Paginate pageCount={npage} setParams={setParams} />
        )}
      </div>
    </>
  );
};

export default MainCoursesList;
