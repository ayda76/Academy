import { PiPencil, PiTrash } from "react-icons/pi";
import useUser from "../../../../../hooks/auth/useUser";
import { useState } from "react";
import Modal from "../../../../../ui/Modal";
import ConfirmDeleteComment from "./ConfirmDeleteComment";
import MainCreateComment from "../create/MainCreateComment";

const CommentItem = ({ comment }) => {
  const { user } = useUser();
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <div className="bg-purple-100/50 rounded-md p-4 space-y-2">
      {openDelete && (
        <Modal title={"حذف دیدگاه"} onClose={() => setOpenDelete(false)}>
          <ConfirmDeleteComment
            id={comment?.id}
            onClose={() => setOpenDelete(false)}
          />
        </Modal>
      )}
      {openEdit && (
        <Modal title={"ویرایش دیدگاه"} onClose={() => setOpenEdit(false)}>
          <MainCreateComment
            commentId={comment?.id}
            text={comment?.text}
            onClose={() => setOpenEdit(false)}
          />
        </Modal>
      )}
      <div className="flex items-center justify-between pb-1 border-b border-purple-200">
        <span className="text-sm text-purple-800">
          {comment?.profile_related?.firstname +
            " " +
            comment?.profile_related?.lastname}
        </span>
        <div className="flex items-center gap-1.5">
          {comment?.profile_related?.id === user?.id && (
            <div className="flex items-center gap-1.5">
              <PiPencil
                onClick={() => setOpenEdit(true)}
                className="cursor-pointer hover:text-purple-800 transition-all"
                title="ویرایش"
              />
              <PiTrash
                onClick={() => setOpenDelete(true)}
                className="cursor-pointer hover:text-error transition-all"
                title="حذف"
              />
            </div>
          )}
        </div>
      </div>
      <p className="text-sm leading-7 text-secondary-800">{comment?.text}</p>
    </div>
  );
};

export default CommentItem;
