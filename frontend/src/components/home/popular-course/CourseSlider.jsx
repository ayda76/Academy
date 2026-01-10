import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useRef } from "react";
import CourseCard from "../../../ui/CourseCard";
import usePopluarCourse from "../../../hooks/courses/usePopularCourse";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import CourseCardLoading from "../../../ui/CourseCardLoading";

export default function CourseSlider() {
  const { data, isLoading } = usePopluarCourse();

  const swiperRef = useRef(null);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-semibold text-lg text-purple-800">
          پرمخاطب‌ترین دوره‌ها
        </h4>

        <div className="flex gap-2">
          <button
            disabled={isLoading}
            onClick={() => swiperRef.current?.slidePrev()}
            className="px-3 py-1.5 rounded cursor-pointer bg-purple-200 hover:bg-purple-300 transition"
          >
            <PiCaretRightBold className="text-xl text-purple-800" />
          </button>
          <button
            disabled={isLoading}
            onClick={() => swiperRef.current?.slideNext()}
            className="px-3 py-1.5 rounded cursor-pointer bg-purple-200 hover:bg-purple-300 transition"
          >
            <PiCaretLeftBold className="text-xl text-purple-800" />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView="auto"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {isLoading
          ? Array.from({ length: 3 })?.map((arr, index) => (
              <SwiperSlide
                key={index}
                className="max-w-[250px]! bg-white mx-2 rounded-xl"
              >
                <CourseCardLoading />
              </SwiperSlide>
            ))
          : data?.map((course) => (
              <SwiperSlide
                key={course.id}
                className="w-fit! mx-2 bg-secondary-100 rounded-xl"
              >
                <CourseCard course={course} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
