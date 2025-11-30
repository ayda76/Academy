import { useParams } from "react-router-dom";
import useUser from "../../../../../hooks/auth/useUser";
import useCreateComment from "../../../../../hooks/comment/useCreateComment";
import SubmitButton from "../../../../../ui/SubmitButton";
import TextAreaField from "../../../../../ui/TextAreaField";
import { useForm } from "react-hook-form";

const MainCreateComment = ({ onClose }) => {
  const { id } = useParams();
  const { user } = useUser();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { cretaeCommentFn, isCreating } = useCreateComment();
  const onSubmit = (data) => {
    const formData = {
      ...data,
      content_type: "course_app.course",
      profile_related: user?.id,
      object_id: id,
    };
    console.log(formData);
    cretaeCommentFn(formData, {
      onSuccess: () => {
        onClose();
      },
    });
  };
  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextAreaField
        name={"text"}
        label={"متن دیدگاه"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
      />
      <SubmitButton disabled={isCreating}>ثبت</SubmitButton>
    </form>
  );
};

export default MainCreateComment;
