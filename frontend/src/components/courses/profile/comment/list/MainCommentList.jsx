import { useState } from "react";
import useGetCourseComment from "../../../../../hooks/comment/useGetCourseComment";
import CommentItem from "./CommentItem";
import Modal from "../../../../../ui/Modal";
import MainCreateComment from "../create/MainCreateComment";
import useUser from "../../../../../hooks/auth/useUser";
import useAuth from "../../../../../hooks/useAuth";

const MainCommentList = ({ courseName, courseId }) => {
  const { user } = useUser();
  const { comments, isLoadingCm, isFetching } = useGetCourseComment();
  const { myCourse, isLoadingCourse, isLoadingUser } = useAuth();
  const course = !myCourse || myCourse === "error" ? [] : myCourse;
  const isEnroll = user?.firstname && course?.some((c) => c?.id === courseId);
  const [openCm, setOpenCm] = useState(false);
  return (
    <div className="space-y-4 w-full md:w-[80%]">
      {openCm && (
        <Modal
          onClose={() => setOpenCm(false)}
          title={`ثبت دیدگاه برای دوره ${courseName}`}
        >
          <MainCreateComment onClose={() => setOpenCm(false)} />
        </Modal>
      )}
      <div className="flex items-center justify-between">
        <h5 className="font-semibold text-secondary-900">دیدگاه</h5>
        {isEnroll && (
          <button
            onClick={() => setOpenCm(true)}
            className="text-sm text-purple-800 cursor-pointer"
          >
            ثبت دیدگاه
          </button>
        )}
      </div>
      {isLoadingCm || isFetching ? (
        <p className="text-sm"> در حال بارگذاری...</p>
      ) : comments?.length < 1 ? (
        <p className="text-sm lg:text-base leading-7 lg:leading-8 text-secondary-700">
          دیدگاهی برای این دوره ثبت نشده است.
        </p>
      ) : (
        comments?.map((comment) => (
          <CommentItem key={comment?.id} comment={comment} />
        ))
      )}
    </div>
  );
};

export default MainCommentList;
