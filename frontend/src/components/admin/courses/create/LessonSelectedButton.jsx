import { useState } from "react";
import SelectList from "./SelectList";
import useGetLesson from "../../../../hooks/lesson/useGetLesson";

const LessonSelectedButton = ({
  value,
  onChange,
  errors,
  label,
  name,
  required = false,
}) => {
  const [show, setShow] = useState(false);
  const { lessons, isLoadingLessons } = useGetLesson();
  return (
    <div>
      {show && (
        <SelectList
          name={name}
          value={value}
          onChange={onChange}
          onClose={() => setShow(false)}
          label={"تاریخ پایان"}
          data={lessons}
          title={"لیست درس‌ها"}
          isLodaing={isLoadingLessons}
        />
      )}
      <span className="mb-2 block text-sm text-secondary-700">
        {label} {required && <span className="text-error text-base">*</span>}
      </span>
      <button
        type="button"
        onClick={() => setShow(true)}
        className="border border-secondary-400 p-1.5 w-full text-sm rounded-md outline-none cursor-pointer focus:shadow-sm bg-secondary-50 text-secondary-600"
      >
        {value?.length < 1 ? "انتخاب کنید" : `${value?.length} مورد انتخاب شده`}
      </button>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default LessonSelectedButton;
