import { useForm } from "react-hook-form";
import TextField from "../../../../ui/TextField";
import SubmitButton from "../../../../ui/SubmitButton";
import useCreateOrg from "../../../../hooks/organization/useCreateOrg";
import useEditOrg from "../../../../hooks/organization/useEditOrg";

const MainCreateOrg = ({ orgData = {} }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {
      name: orgData?.name || null,
      phone: orgData?.phone || null,
      address: orgData?.address || null,
    },
  });
  const { createOrgFn, isCreating } = useCreateOrg();
  const { editOrgFn, isEditing } = useEditOrg();
  const onSubmit = (data) => {
    console.log(data);
    if (orgData?.id) {
      editOrgFn({ id: orgData?.id, formData: data });
    } else {
      createOrgFn(data);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-[400px]">
      <h4>{orgData?.id ? "ویرایش" : "ایجاد"} سازمان</h4>
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
      <TextField
        label={"شماره تماس"}
        name={"phone"}
        errors={errors}
        type="tel"
        inputMode="tel"
        register={register}
      />
      <TextField
        label={"آدرس"}
        name={"address"}
        errors={errors}
        register={register}
      />
      <SubmitButton disabled={isCreating || isEditing}>
        {orgData?.id ? "ویرایش" : "ثبت"}
      </SubmitButton>
    </form>
  );
};

export default MainCreateOrg;
