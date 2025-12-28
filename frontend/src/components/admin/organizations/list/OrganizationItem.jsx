import { PiPencilDuotone, PiTrashDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import useDeleteOrg from "../../../../hooks/organization/useDeleteOrg";

const OrganizationItem = ({ org }) => {
  const { deleteOrgFn, isPending } = useDeleteOrg();
  return (
    <tr>
      <td>{org?.name}</td>
      <td>{org?.phone}</td>
      <td>{org?.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link to={`/admin/organization/edit/${org?.id}`}>
            <PiPencilDuotone className="text-lg" />
          </Link>
          <button
            className="cursor-pointer disabled:cursor-not-allowed"
            onClick={() => deleteOrgFn(org?.id)}
            disabled={isPending}
          >
            <PiTrashDuotone className="text-lg" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default OrganizationItem;
