import { useParams } from "react-router-dom";
import useGetOrgById from "../../../../hooks/organization/useGetOrgById";
import Loading from "../../../../ui/Loading";
import MainCreateOrg from "./MainCreateOrg";

const MainEditOrg = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetOrgById(id);
  return isLoading ? (
    <Loading />
  ) : data?.length < 1 ? (
    <p className="text-center text-sm text-secondary-700 font-semibold pt-10">
      موردی یافت نشد.
    </p>
  ) : (
    <MainCreateOrg orgData={data} />
  );
};

export default MainEditOrg;
