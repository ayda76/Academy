import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import TextField from "../../ui/TextField";
import PasswordField from "../../ui/PasswordField";
import useGetRefresh from "../../hooks/auth/useGetRefresh";
import { setAccessToken } from "../../services/api";
import SubmitButton from "../../ui/SubmitButton";

const MainSignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

 const { createRefreshFn, isCreatingRefresh } = useGetRefresh();

  const onSubmit = (data) => {
    console.log(data);
    createRefreshFn(data, {
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
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={"نام کاربری"}
        name={"username"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
          minLength: {
            value: 4,
            message: "نام کاربری پروژه باید بیشتر از 4 کاراکتر باشد.",
          },
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
      <SubmitButton disabled={isCreatingRefresh}>ثبت‌نام</SubmitButton>
    </form>
  );
};

export default MainSignIn;
