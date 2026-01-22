import { useRef } from "react";
import useUploadFile from "../../../../hooks/lesson/useUploadFile";
import useDeleteFile from "../../../../hooks/lesson/useDeleteFile";
import { PiX } from "react-icons/pi";
import toast from "react-hot-toast";

export const UploadVideo = ({ video, setVideo }) => {
  const ref = useRef(null);
  const { uploadFileFn, isPending } = useUploadFile();
  const { deleteFileFn, isDeleting } = useDeleteFile();
  const handleUploadFile = async (e) => {
    const file = e.target.files[0];
    ref.current.value = null;
    setVideo(file);
    // const formData = {
    //   file_doc: file,
    // };
    // uploadFileFn(formData, {
    //   onSuccess: (data) => {
    //     setVideo(data);
    //     console.log(data);
    //   },
    // });
  };
  // console.log(video);
  return (
    <div>
      <input
        ref={ref}
        onChange={handleUploadFile}
        disabled={isPending || video}
        type="file"
        name="video"
        id="video"
        accept="video/*"
        className="hidden peer"
      />
      <label
        htmlFor="video"
        className="block text-center cursor-pointer disabled:cursor-not-allowed border border-purple-800 p-1.5 rounded-md text-sm text-purple-800 peer-disabled:border-secondary-700 peer-disabled:text-secondary-700 w-full"
      >
        بارگذاری ویدیو
      </label>
      <span className="text-error text-xs">
        بارگذاری فقط یک ویدیو مجاز است.
      </span>
      <div className="flex flex-col gap-2 mt-2 mb-4">
        {isPending ? (
          <p className="text-sm">در حال بارگذاری فایل...</p>
        ) : isDeleting ? (
          <p className="text-sm">در حال حذف فایل..</p>
        ) : (
          video && (
            <div className="flex items-center justify-between">
              <p className="text-xs">
                {video?.file_doc
                  ? video?.file_doc?.split("/").at(-1)
                  : video?.split("/").at(-1)}
              </p>
              <button
                className="cursor-pointer disabled:cursor-not-allowed"
                onClick={() =>
                  // deleteFileFn(video?.id, {
                  //   onSuccess: () => {
                  //     setVideo(null);
                  //   },
                  // })
                  setVideo(null)
                }
                disabled={isDeleting}
              >
                <PiX className="text-base" />
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};
