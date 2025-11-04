import { Navigate, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useUser from "../../hooks/auth/useUser";
import TextField from "../../ui/TextField";
import SubmitButton from "../../ui/SubmitButton";
import useCompleteProfile from "../../hooks/auth/useCompleteProfile";
import toast from "react-hot-toast";
const MainCompleteProfile = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",
  });
  const { user, isLoadingUser } = useUser();
  const { completeUser, isCreating } = useCompleteProfile();
  const onSubmit = (data) => {
    const formData = {
      user: user?.user,
      ...data,
    };
    console.log(formData);
    completeUser(
      { id: user?.id, formData },
      {
        onSuccess: () => {
          navigate("/dashboard", { replace: true });
          toast.success("اطلاعات شما باموفقیت ثبت شد.");
        },
      },
    );
  };
  console.log(user);
  if (isLoadingUser) return <div>loading...</div>;
  if (!isLoadingUser && !user?.id) return <Navigate to={"/"} replace={true} />;
  if (!isLoadingUser && user?.firstname)
    return <Navigate to={"/"} replace={true} />;
  return (
    <form className="space-y-4  w-full px-5 md:max-w-[400px]" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-purple-700 font-semibold text-sm md:text-base">
        اطلاعات خود را تکمیل کنید
      </h3>
      <TextField
        label={"نام"}
        name={"firstname"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
      />
      <TextField
        label={"نام خانوادگی"}
        name={"lastname"}
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
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "ایمیل معتبر نیست.",
          },
        }}
      />
      <TextField
        label={"شماره موبایل"}
        name={"phone"}
        errors={errors}
        register={register}
        validationSchema={{
          pattern: {
            value: /^0[1-9]{1}[0-9]{9}$/,
            message: "شماره موبایل معتبر نیست.",
          },
        }}
      />
      <TextField label={"آدرس"} name={"address"} register={register} />
      <SubmitButton disabled={isCreating}>تکمیل</SubmitButton>
    </form>
  );
};

export default MainCompleteProfile;
