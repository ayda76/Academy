import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useRef, useState } from "react";
import CourseCard from "../../../ui/CourseCard";
import usePopluarCourse from "../../../hooks/courses/usePopularCourse";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import CourseCardLoading from "../../../ui/CourseCardLoading";

export default function CourseSlider() {
  const { data, isLoading } = usePopluarCourse();
  const swiperRef = useRef(null);
  // const [atStart, setAtStart] = useState(true);
  // const [atEnd, setAtEnd] = useState(false);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-semibold text-lg text-purple-900">
          پرمخاطب‌ترین دوره‌ها
        </h4>

        <div className="flex gap-2">
          <button
            disabled={isLoading}
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-800 text-white hover:bg-purple-700 transition"
          >
            <PiCaretRightBold />
          </button>
          <button
            disabled={isLoading}
            onClick={() => swiperRef.current?.slideNext()}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-800 text-white hover:bg-purple-700 transition"
          >
            <PiCaretLeftBold />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView="auto"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          // setAtStart(swiper.isBeginning);
          // setAtEnd(swiper.isEnd);
        }}
        // onSlideChange={(swiper) => {
        //   setAtStart(swiper.isBeginning);
        //   setAtEnd(swiper.isEnd);
        // }}
      >
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide key={index} className="w-[250px]! mx-2">
                <CourseCardLoading />
              </SwiperSlide>
            ))
          : data?.map((course) => (
              <SwiperSlide key={course.id} className="w-fit! mx-2">
                <CourseCard course={course} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
