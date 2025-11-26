import { PiTrash } from "react-icons/pi";
import useUser from "../../../../../hooks/auth/useUser";
import { useState } from "react";
import Modal from "../../../../../ui/Modal";
import ConfirmDeleteComment from "./ConfirmDeleteComment";

const CommentItem = ({ comment }) => {
  const { user } = useUser();
  const [openDelete, setOpenDelete] = useState(false);
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
      <div className="flex items-center justify-between pb-1 border-b border-purple-200">
        <span className="text-sm text-purple-800">
          {comment?.profile_related?.firstname + " " + comment?.profile_related?.lastname}
        </span>
        <div className="flex items-center gap-1.5">
          {comment?.profile_related?.id === user?.id && (
            <PiTrash
              onClick={() => setOpenDelete(true)}
              className="cursor-pointer hover:text-error transition-all"
            />
          )}
        </div>
      </div>
      <p className="text-sm leading-7 text-secondary-800">{comment?.text}</p>
    </div>
  );
};

export default CommentItem;
