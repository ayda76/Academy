import { PiPencilDuotone, PiTrashDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const LessonItem = ({ lesson }) => {
  return (
    <tr>
      <td>{lesson?.name}</td>
      <td>
        {lesson?.instructor?.firstname + " " + lesson?.instructor?.lastname}
      </td>
      <td>
        <div className="flex items-center gap-2">
          <Link to={`/admin/organization/edit/${lesson?.id}`}>
            <PiPencilDuotone className="text-lg" />
          </Link>
          <button
            className="cursor-pointer disabled:cursor-not-allowed"
            // onClick={() => deleteOrgFn(org?.id)}
            // disabled={isPending}
          >
            <PiTrashDuotone className="text-lg" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default LessonItem;
