import { PiPencilDuotone, PiTrashDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import useDeleteLesson from "../../../../hooks/lesson/useDeleteLesson";

const LessonItem = ({ lesson }) => {
  const { DeleteLessonFn, isPending } = useDeleteLesson();
  return (
    <tr>
      <td>{lesson?.name}</td>
      <td>
        {lesson?.instructor?.firstname + " " + lesson?.instructor?.lastname}
      </td>
      <td>
        <div className="flex items-center gap-2">
          <Link to={`/admin/lessons/edit/${lesson?.id}`}>
            <PiPencilDuotone className="text-lg" />
          </Link>
          <button
            className="cursor-pointer disabled:cursor-not-allowed"
            onClick={() => DeleteLessonFn(lesson?.id)}
            disabled={isPending}
          >
            <PiTrashDuotone className="text-lg" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default LessonItem;
