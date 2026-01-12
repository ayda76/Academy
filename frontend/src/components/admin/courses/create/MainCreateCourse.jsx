import { Controller, useForm } from "react-hook-form";
import TextField from "../../../../ui/TextField";
import useGetOrganization from "../../../../hooks/organization/useGetOrganization";
import SelectField from "../../../../ui/SelectField";
// import useGetLesson from "../../../../hooks/lesson/useGetLesson";
import SubmitButton from "../../../../ui/SubmitButton";
import useCreateCourse from "../../../../hooks/courses/useCreateCourse";
import { useState } from "react";
import LessonSelectedButton from "./LessonSelectedButton";

const MainCreateCourse = ({ course = {} }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      lessons_related: [],
    },
    mode: "onChange",
  });

  const { creatCourseFn, isCreating } = useCreateCourse();

  const onSubmit = (data) => {
    console.log(data);
    if (course?.id) {
      console.log("edit");
    } else {
      creatCourseFn(data);
    }
  };

  const { organization, isLoadingOrg } = useGetOrganization();
  // const { lessons, isLoadingLessons } = useGetLesson();
  const typeList = [
    { value: false, label: "آفلاین" },
    { value: true, label: "آنلاین" },
  ];
  const [show, setShow] = useState(true);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-[400px]">
      <h4>{course?.id ? "ویرایش" : "ایجاد"} دوره</h4>
      <TextField
        label={"نام"}
        name={"name"}
        errors={errors}
        required
        register={register}
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
      />
      <SelectField
        label={"سازمان"}
        name={"organization"}
        errors={errors}
        register={register}
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
        required
        isLoading={isLoadingOrg}
        options={organization?.map((org) => {
          return {
            value: org?.id,
            label: org?.name,
          };
        })}
      />
      {/* <SelectField
        label={"درس‌ها"}
        name={"lessons_related"}
        errors={errors}
        register={register}
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
        required
        options={lessons?.map((lesson) => {
          return {
            value: lesson?.id,
            label: lesson?.name,
          };
        })}
        multiple={true}
        isLoading={isLoadingLessons}
      /> */}
      <Controller
        name={"lessons_related"}
        control={control}
        rules={{ required: "این فیلد الزامی است." }}
        render={({ field }) => (
          <LessonSelectedButton
            label={"درس‌ها"}
            name={"lessons_related"}
            errors={errors}
            value={field?.value}
            onChange={field.onChange}
            onClose={() => setShow(false)}
            required
          />
        )}
      />
      <TextField
        label={"قیمت"}
        name={"price"}
        errors={errors}
        register={register}
        type="number"
        required
        validationSchema={{
          pattern: {
            value: /^[1-9]/,
            message: "فقط عدد مجاز است.",
          },
          required: "این فیلد الزامی است.",
        }}
        inputMode="number"
      />
      <SelectField
        label={"نوع دوره"}
        name={"is_online"}
        register={register}
        options={typeList}
      />
      <SubmitButton disabled={isCreating}>
        {course?.id ? "ویرایش" : "ثبت"}
      </SubmitButton>
    </form>
  );
};

export default MainCreateCourse;
