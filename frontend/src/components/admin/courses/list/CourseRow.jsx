import { PiPencilDuotone, PiTrashDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import priceType from "../../../../utils/priceType";

const CourseRow = ({ course }) => {
  return (
    <tr>
      <td>{course?.name}</td>
      <td>{course?.organization?.name}</td>
      <td>{priceType(+course?.price)}</td>
      <td>{course?.is_online ? "آنلاین" : "آفلاین"}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link to={`/admin/courses/edit/${course?.id}`}>
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

export default CourseRow;
