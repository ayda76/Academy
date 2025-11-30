import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useUser from "../../hooks/auth/useUser";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import PasswordField from "../../ui/PasswordField";
import SubmitButton from "../../ui/SubmitButton";
import useSignUp from "../../hooks/auth/useSignUp";
import Cookies from "js-cookie";
import { setAccessToken } from "../../services/api";
import Loading from "../../ui/Loading";

const MainSignUp = () => {
  const appSignging = localStorage.getItem("_appSignging") || false;
  const location = useLocation();
  const from = location.state?.from;
  console.log(location);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const { user, isLoadingUser } = useUser();
  const { createUserFn, isCreatingUser } = useSignUp();
  const navigate = useNavigate();
  //   const { createRefreshFn, isCreatingRefresh } = useGetRefresh();

  const onSubmit = (data) => {
    console.log(data);
    createUserFn(data, {
      onSuccess: (data) => {
        localStorage.setItem("_appSignging", true);
        Cookies.set("refresh", data.refresh, {
          expires: 1,
          secure: true,
          sameSite: "strict",
        });
        setAccessToken(data?.access);
        navigate("/auth/complete-profile", { replace: true, state: { from } });
      },
    });
  };

  return isLoadingUser ? (
    <Loading />
  ) : user?.id ? (
    <Navigate to={"/"} replace={true} />
  ) : (
    <form
      className="space-y-4 w-full px-5 md:max-w-[400px]"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <h3 className="text-purple-700 font-semibold text-sm md:text-base">
        ثبت‌نام
      </h3>
      <TextField
        label={"نام کاربری"}
        name={"username"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
          pattern: {
            value: /^[A-Za-z][A-Za-z0-9]*(?:[@_$][A-Za-z0-9]+)?$/,
            message: "فقط حروف انگلیسی و حداقل یکی از حروف @ _ $ مجاز است.",
          },
        }}
        autoComplete="new-username"
      />
      {/* <TextField
        label={"ایمیل"}
        name={"email"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
      /> */}
      <PasswordField
        label={"کلمه عبور"}
        name={"password"}
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
        autoComplete={"new-password"}
      />
      <PasswordField
        label={"تکرار کلمه عبور"}
        name={"password2"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
          validate: (value) =>
            value === watch("password") || "با کلمه عبور یکسان نیست.",
        }}
        watch={watch}
      />
      <div className="space-y-2">
        <SubmitButton disabled={isCreatingUser}>ثبت‌نام</SubmitButton>
        <Link
          to={"/auth/signin"}
          state={{ from }}
          className="text-secondary-700 text-xs"
        >
          حساب کاربری دارید؟ ورود به حساب کاربری
        </Link>
      </div>
    </form>
  );
};

export default MainSignUp;
