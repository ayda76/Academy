import useCourseDetails from "../../../hooks/courses/useCourseDetails";
import useMoveBack from "../../../hooks/useMoveBack";
import Loading from "../../../ui/Loading";
import MainCommentList from "./comment/list/MainCommentList";
import CourseDetailsCard from "./CourseDetailsCard";
import CourseLesson from "./CourseLesson";
import { PiArrowLeftLight } from "react-icons/pi";

const MainCourseProfile = () => {
  const { course, isLoading } = useCourseDetails();
  console.log(course);
  const moveBack = useMoveBack();

  return (
    <div className="w-full min-h-screen">
      {isLoading ? (
        <Loading />
      ) : !course ? (
        <p className="text-center pt-10">موردی یافت نشد.</p>
      ) : (
        <>
          <div className="w-full bg-linear-to-l from-purple-50 to-purple-200 pt-4 pb-10">
            <div className="px-5 flex justify-end">
              <button
                onClick={moveBack}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <span> بازگشت</span>
                <PiArrowLeftLight className="text-primary-900" />
              </button>
            </div>
            <div className="container space-y-5 mx-auto p-4">
              <div className="w-[250px] h-[150px] lg:hidden rounded-md bg-gray-100 mx-auto">
                <img
                  src={course?.image || "/assets/images/course/not-found.jpg"}
                  alt={course?.name}
                  className="w-[250px] h-[150px] rounded-md object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold">عنوان دوره {course?.name}</h1>
              <p className="text-base text-justify text-secondary-700 max-w-[600px] leading-9">
                تمامی محتوای این دوره از جمله ویدئوها و آزمون‌ها به گونه‌ای
                طراحی شده‌اند که یادگیری سریع‌تر و موثرتر صورت پذیرد. همچنین
                تالار پرسش و پاسخ این دوره، محیطی را برای رفع ابهامات و تعامل با
                مدرس و دیگر دانشجویان فراهم می‌کند.
              </p>
            </div>
          </div>
          <div className="w-full bg-white py-10">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
              {/* ستون متن */}
              <div className="lg:col-span-2 space-y-8">
                {/* درس */}
                <div className="flex flex-col gap-4">
                  <h5 className="font-semibold text-secondary-900">
                    درس‌های مرتبط با دوره
                  </h5>
                  <span className="text-sm text-secondary-600">
                    شامل {course?.lessons_related?.length} درس
                  </span>
                  <div>
                    {course?.lessons_related?.length < 1 ? (
                      <p className="text-sm">برای این آموزش درسی ثیت نشده</p>
                    ) : (
                      course?.lessons_related?.map((lesson, index) => (
                        <CourseLesson
                          key={lesson?.id}
                          lesson={lesson}
                          index={index + 1}
                        />
                      ))
                    )}
                  </div>
                </div>
                {/* درباره اموزش */}
                <div className="space-y-4">
                  <h5 className="font-semibold text-secondary-900">
                    درباره آموزش
                  </h5>
                  <p className="text-sm lg:text-base leading-7 lg:leading-8 text-secondary-700">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                  </p>
                </div>
                {/* پیش نیاز*/}
                <div className="space-y-4">
                  <h5 className="font-semibold text-secondary-900">پیش نیاز</h5>
                  <p className="text-sm lg:text-base leading-7 lg:leading-8 text-secondary-700">
                    پیش نیاز ندارد
                  </p>
                </div>
                {/* دیدگاه */}
                <MainCommentList courseName={course?.name} />
              </div>

              {/* مشخصات دوره */}
              <CourseDetailsCard course={course} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainCourseProfile;
