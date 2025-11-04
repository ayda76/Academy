import useUser from "../../hooks/auth/useUser";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router";
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
  const { user, isLoadingUser } = useUser();
  const { createRefreshFn, isCreatingRefresh } = useGetRefresh();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    createRefreshFn(data, {
      onSuccess: (data) => {
        localStorage.setItem("_appSignging", true);
        Cookies.set("refresh", data.refresh, {
          expires: 7,
          secure: true,
          sameSite: "strict",
        });
        setAccessToken(data?.access);
        navigate("/dashboard", { replace: true });
      },
    });
  };
  if (isLoadingUser) return <div>loading...</div>;
  if (!isLoadingUser && user?.id) return <Navigate to={"/"} replace={true} />;
  return (
    <form className="space-y-4 w-full px-5 md:max-w-[400px]" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-purple-700 font-semibold text-sm md:text-base">
        ورود
      </h3>
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
        label={"کلمه عبور"}
        name={"password"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
        watch={watch}
      />
      <div className="space-y-2">
        <SubmitButton disabled={isCreatingRefresh}>ورود</SubmitButton>
        <Link to={"/auth/signup"} className="text-secondary-700 text-xs">
          حساب کاربری ندارید؟ ایجاد حساب کاربری
        </Link>
      </div>
    </form>
  );
};

export default MainSignIn;
