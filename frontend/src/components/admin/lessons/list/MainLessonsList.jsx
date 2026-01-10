import { Link } from "react-router-dom";
import useGetLesson from "../../../../hooks/lesson/useGetLesson";
import LessonItem from "./LessonItem";

const MainLessonsList = () => {
  const { lessons, isLoadingLessons, isFetching } = useGetLesson();
  return (
    <div className="flex flex-col gap-y-8">
      <h4>لیست درس‌ها</h4>
      <Link
        className="text-sm text-purple-900 border border-purple-900 rounded-lg w-fit py-2 px-4"
        to={"/admin/lessons/create"}
      >
        ایجاد درس
      </Link>
      <div className="min-w-[300px] w-full max-w-[500px] overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>نام</th>
              <th>مدرس</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {isLoadingLessons || isFetching ? (
              <tr>
                <td colSpan="3">
                  <div className="flex items-center justify-center p-5">
                    <span>در حال بارگذاری...</span>
                  </div>
                </td>
              </tr>
            ) : lessons?.length < 1 ? (
              <tr>
                <td colSpan="3">
                  <div className="flex items-center justify-center p-5">
                    <span>موردی یافت نشد</span>
                  </div>
                </td>
              </tr>
            ) : (
              lessons?.map((lesson) => (
                <LessonItem key={lesson?.id} lesson={lesson} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainLessonsList;
