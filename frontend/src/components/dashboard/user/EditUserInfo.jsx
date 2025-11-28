import { useForm } from "react-hook-form";
import SubmitButton from "../../../ui/SubmitButton";
import TextField from "../../../ui/TextField";
import useUser from "../../../hooks/auth/useUser";
import toast from "react-hot-toast";
import useCompleteProfile from "../../../hooks/auth/useCompleteProfile";
import { useNavigate } from "react-router-dom";

const EditUserInfo = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: user?.firstname,
      lastname: user?.lastname,
      email: user?.email,
      phone: 0 + user?.phone,
      address: user?.address,
    },
  });
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
          navigate("/dashboard/user", { replace: true });
          toast.success("اطلاعات شما باموفقیت ویرایش شد.");
        },
      },
    );
  };
  return (
    <form
      className="space-y-4  w-full px-5 md:max-w-[400px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-purple-700 font-semibold text-sm md:text-base">
        ویرایش اطلاعات
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
      <SubmitButton disabled={isCreating}>ویرایش</SubmitButton>
    </form>
  );
};

export default EditUserInfo;
