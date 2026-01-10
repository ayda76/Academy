import { useState } from "react";
import SubmitButton from "../../../../ui/SubmitButton";
import UploadArticles from "./UploadArticles";
import { UploadVideo } from "./UploadVideo";
import useUser from "../../../../hooks/auth/useUser";
import useCreateLesson from "../../../../hooks/lesson/useCreateLesson";

const MainCreateLesson = ({ lessonData = {} }) => {
  const { user } = useUser();
  const [name, setName] = useState("");
  const [articles, setArticles] = useState([]);
  const [video, setVideo] = useState("");
  const { createLessonFn, isCreating } = useCreateLesson();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const articlesId = articles?.map((a) => a?.id);
    const videoId = video?.id || "";
    const formData = {
      name,
      instructor: user?.id,
      articles: articles,
      video: video?.file_doc || null,
    };
    console.log(formData);
    createLessonFn(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-[400px]">
      <h4>ایجاد درس</h4>
      <div className="my-4">
        <label className="mb-2 block text-sm text-secondary-700" htmlFor={name}>
          نام درس <span className="text-error text-base">*</span>
        </label>
        <input
          id={"name"}
          onChange={(e) => setName(e.target.value)}
          className="border border-secondary-400 p-1.5 w-full text-sm rounded-md outline-none focus:shadow-sm bg-secondary-50"
          type={"text"}
          autoComplete={"off"}
        />
        {/* {errors && errors[name] && (
          <span className="text-error block text-sm mt-2">
            {errors[name]?.message}
          </span>
        )} */}
      </div>
      <UploadArticles articles={articles} setArticles={setArticles} />
      <UploadVideo video={video} setVideo={setVideo} />
      <SubmitButton
        //  disabled={isCreating || isEditing}
        disabled={isCreating}
      >
        {lessonData?.id ? "ویرایش" : "ثبت"}
      </SubmitButton>
    </form>
  );
};

export default MainCreateLesson;
