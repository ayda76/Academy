import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import PasswordField from "../../ui/PasswordField";
import SubmitButton from "../../ui/SubmitButton";
import useSignUp from "../../hooks/auth/useSignUp";
// import useGetRefresh from "../../hooks/auth/useGetRefresh";
import Cookies from "js-cookie";
import { setAccessToken } from "../../services/api";

const MainSignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const { createUserFn, isCreatingUser } = useSignUp();
  //   const { createRefreshFn, isCreatingRefresh } = useGetRefresh();

  const onSubmit = (data) => {
    console.log(data);
    createUserFn(data, {
      onSuccess: (data) => {
        localStorage.setItem("_appSignging", true);
        Cookies.set("refresh_token", data.refresh, {
          expires: 7,
          secure: true,
          sameSite: "strict",
        });
        setAccessToken(data?.access);
      },
    });
  };

  return (
    <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={"نام کاربری"}
        name={"username"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
      />
      <TextField
        label={"ایمیل"}
        name={"email"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
      />
      <PasswordField
        label={"رمز عبور"}
        name={"password"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
        watch={watch}
      />
      <PasswordField
        label={"تکرار رمز عبور"}
        name={"password2"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
        watch={watch}
      />
      <SubmitButton disabled={isCreatingUser}>ثبت‌نام</SubmitButton>
    </form>
  );
};

export default MainSignUp;
