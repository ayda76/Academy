import useUser from "../../hooks/auth/useUser";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import TextField from "../../ui/TextField";
import PasswordField from "../../ui/PasswordField";
import useGetRefresh from "../../hooks/auth/useGetRefresh";
import { setAccessToken } from "../../services/api";
import SubmitButton from "../../ui/SubmitButton";
import Loading from "../../ui/Loading";

const MainSignIn = () => {
  const appSignging = localStorage.getItem("_appSignging") || false;
  const location = useLocation();
  const from = location.state?.from;
  console.log(location);
  
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
          expires: 1,
          secure: true,
          sameSite: "strict",
        });
        setAccessToken(data?.access);
        const path = from || "/dashboard";
        navigate(path, { replace: true });
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
    >
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
          pattern: {
            value: /^[A-Za-z][A-Za-z0-9]*(?:[@_$][A-Za-z0-9]+)?$/,
            message: "فقط حروف انگلیسی و حداقل یکی از حروف @ _ $ مجاز است.",
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
        <Link
          to={"/auth/signup"}
          state={{ from }}
          className="text-secondary-700 text-xs"
        >
          حساب کاربری ندارید؟ ایجاد حساب کاربری
        </Link>
      </div>
    </form>
  );
};

export default MainSignIn;
