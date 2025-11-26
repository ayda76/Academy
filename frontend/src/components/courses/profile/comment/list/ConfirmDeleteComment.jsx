import useDeleteComment from "../../../../../hooks/comment/useDeleteComment";

const ConfirmDeleteComment = ({ id, onClose }) => {
  const { deleteCommentFn, isDeleting } = useDeleteComment();
  const deleteHandler = () => {
    deleteCommentFn(id, {
      onSuccess: () => {
        onClose();
      },
    });
  };
  return (
    <div className="py-2 space-y-8">
      <p className="text-sm text-secondary-800">
        از <b className="text-error">حذف</b> دیدگاه خود اطمینان دارید؟
      </p>
      <div className="flex items-center gap-8">
        <button
          onClick={deleteHandler}
          disabled={isDeleting}
          className="rounded-md bg-error p-1.5 w-[60px] text-center text-sm text-secondary-50 cursor-pointer disabled:cursor-not-allowed disabled:bg-secondary-400"
        >
          بله
        </button>
        <button
          onClick={onClose}
          disabled={isDeleting}
          className="rounded-md bg-primary-900 p-1.5 w-[60px] text-center text-sm text-secondary-50 cursor-pointer disabled:cursor-not-allowed"
        >
          خیر
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteComment;
