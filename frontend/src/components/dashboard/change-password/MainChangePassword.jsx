import { useForm } from "react-hook-form";
import PasswordField from "../../../ui/PasswordField";
import SubmitButton from "../../../ui/SubmitButton";
import useChangePassword from "../../../hooks/auth/useChangePassword";

const MainChangePassword = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { changePasswordFn, isChanging } = useChangePassword();
  const onSubmit = (data) => {
    console.log(data);
    changePasswordFn(data, { onSuccess: () => reset() });
  };
  return (
    <form
      autoComplete="off"
      className="space-y-4 w-full px-5 sm:max-w-[400px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-purple-700 font-semibold text-sm md:text-base">
        تغییر کلمه عبور
      </h3>
      <PasswordField
        label={"کلمه عبور قبلی"}
        name={"old_password"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
          // minLength: {
          //   value: 8,
          //   message: "حداقل 8 کاراکتر مجاز است.",
          // },
        }}
        watch={watch}
        autoComplete={"old-password"}
      />
      <PasswordField
        label={"کلمه عبور جدید"}
        name={"new_password1"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
          minLength: {
            value: 8,
            message: "حداقل 8 کاراکتر مجاز است.",
          },
        }}
        watch={watch}
        autoComplete={"new-password1"}
      />
      <PasswordField
        label={"تکرار کلمه عبور جدید"}
        name={"new_password2"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
          validate: (value) =>
            value === watch("new_password1") || "با کلمه عبور یکسان نیست.",
        }}
        watch={watch}
        autoComplete={"new-password2"}
      />
      <SubmitButton
      // disabled={isCreatingUser}
      >
        ویرایش
      </SubmitButton>
    </form>
  );
};

export default MainChangePassword;
