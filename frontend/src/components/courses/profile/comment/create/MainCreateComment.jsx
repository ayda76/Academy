import { useParams } from "react-router-dom";
import useUser from "../../../../../hooks/auth/useUser";
import useCreateComment from "../../../../../hooks/comment/useCreateComment";
import SubmitButton from "../../../../../ui/SubmitButton";
import TextAreaField from "../../../../../ui/TextAreaField";
import { useForm } from "react-hook-form";
import useEditComment from "../../../../../hooks/comment/useEditComment";

const MainCreateComment = ({ onClose, text, commentId }) => {
  const { id } = useParams();
  const { user } = useUser();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      text: text || "",
    },
  });
  const { cretaeCommentFn, isCreating } = useCreateComment();
  const { editCommentFn, isEdting } = useEditComment();
  const onSubmit = (data) => {
    const formData = {
      ...data,
      content_type: "course_app.course",
      profile_related: user?.id,
      object_id: id,
    };
    console.log(formData);
    if (commentId) {
      editCommentFn(
        { id: commentId, formData },
        {
          onSuccess: () => {
            onClose();
          },
        },
      );
    } else {
      cretaeCommentFn(formData, {
        onSuccess: () => {
          onClose();
        },
      });
    }
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
      <SubmitButton disabled={isCreating || isEdting}>
        <span>{commentId ? "ویرایش" : "ثبت"}</span>
      </SubmitButton>
    </form>
  );
};

export default MainCreateComment;
