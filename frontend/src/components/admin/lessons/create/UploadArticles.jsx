import { useRef } from "react";
import useUploadFile from "../../../../hooks/lesson/useUploadFile";
import { PiTrashDuotone, PiX } from "react-icons/pi";
import useDeleteFile from "../../../../hooks/lesson/useDeleteFile";

const UploadArticles = ({ articles, setArticles }) => {
  const ref = useRef(null);
  const { uploadFileFn, isPending } = useUploadFile();
  const { deleteFileFn, isDeleting } = useDeleteFile();

  const handleUploadFile = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    ref.current.value = null;
    const formData = {
      file_doc: file,
    };
    uploadFileFn(formData, {
      onSuccess: (data) => {
        setArticles([...articles, data]);
        console.log(data);
      },
    });
  };
  return (
    <div className="space-y-4">
      <input
        ref={ref}
        onChange={handleUploadFile}
        disabled={isPending}
        type="file"
        name="article"
        id="article"
        accept=".pdf,.doc,.docx"
        className="hidden peer"
      />
      <label
        htmlFor="article"
        className="block text-center cursor-pointer disabled:cursor-not-allowed border border-purple-800 p-1.5 rounded-md text-sm text-purple-800 peer-disabled:border-secondary-700 peer-disabled:text-secondary-700 w-full"
      >
        بارگذاری مقاله
      </label>
      <div className="flex flex-col gap-2 my-4">
        {isPending ? (
          <p className="text-sm">در حال بارگذاری فایل...</p>
        ) : isDeleting ? (
          <p className="text-sm">در حال حذف فایل..</p>
        ) : (
          articles?.length > 0 &&
          articles?.map((article) => (
            <div
              key={article?.id}
              className="flex items-center justify-between"
            >
              <p className="text-xs truncate">{article?.file_doc?.split("/").at(-1)}</p>
              <button
                className="cursor-pointer disabled:cursor-not-allowed"
                onClick={() =>
                  deleteFileFn(article?.id, {
                    onSuccess: () => {
                      const newFiles = articles?.filter(
                        (a) => a?.id !== article?.id,
                      );
                      setArticles(newFiles);
                    },
                  })
                }
                disabled={isDeleting}
              >
                <PiX className="text-base" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UploadArticles;
