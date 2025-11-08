import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <FadeLoader color="#6e11b0" />
    </div>
  );
};

export default Loading;
