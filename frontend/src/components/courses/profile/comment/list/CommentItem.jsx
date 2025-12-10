import { PiArrowUUpLeftLight, PiPencil, PiTrash } from "react-icons/pi";
import useUser from "../../../../../hooks/auth/useUser";
import { useState } from "react";
import Modal from "../../../../../ui/Modal";
import ConfirmDeleteComment from "./ConfirmDeleteComment";
import MainCreateComment from "../create/MainCreateComment";

const CommentItem = ({ comment, commentHasOrigin }) => {
  const myReplyComment = commentHasOrigin?.filter(
    (cm) => cm?.origin === comment?.id,
  );
  const { user } = useUser();
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openReply, setOpenReply] = useState(false);
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
            origin={comment?.origin}
            onClose={() => setOpenEdit(false)}
          />
        </Modal>
      )}
      {openReply && (
        <Modal
          title={`پاسخ به دیدگاه ${comment?.profile_related?.firstname + " " + comment?.profile_related?.lastname}`}
          onClose={() => setOpenReply(false)}
        >
          <MainCreateComment
            origin={comment?.id}
            onClose={() => setOpenReply(false)}
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
                className="cursor-pointer text-purple-900"
                title="ویرایش"
              />
              <PiTrash
                onClick={() => setOpenDelete(true)}
                className="cursor-pointer text-error"
                title="حذف"
              />
            </div>
          )}
          {!comment?.origin && user?.id && (
            <PiArrowUUpLeftLight
              onClick={() => setOpenReply(true)}
              className="cursor-pointer text-primary-900"
              title="پاسخ"
            />
          )}
        </div>
      </div>
      <p className="text-sm leading-7 text-secondary-800">{comment?.text}</p>
      <div>
        {myReplyComment?.length > 0 &&
          myReplyComment?.map((cm) => (
            <div
              key={cm?.id}
              className="flex flex-col gap-2 justify-between p-1 px-2 border-t mr-3 md:mr-5 border-purple-200 bg-purple-100"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-800">
                  {cm?.profile_related?.firstname +
                    " " +
                    cm?.profile_related?.lastname}
                </span>
                {/* {cm?.profile_related?.id === user?.id && (
                  <PiTrash
                    onClick={() => setOpenDelete(true)}
                    className="cursor-pointer text-error"
                    title="حذف"
                  />
                )} */}
              </div>
              <p className="text-sm text-secondary-800">{cm?.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentItem;
