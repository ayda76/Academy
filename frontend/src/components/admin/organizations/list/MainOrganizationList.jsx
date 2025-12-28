import { Link } from "react-router-dom";
import useGetOrganization from "../../../../hooks/organization/useGetOrganization";
import OrganizationItem from "./OrganizationItem";

const MainOrganizationList = () => {
  const { organization, isLoadingOrg, isFetching } = useGetOrganization();
  return (
    <div className="flex flex-col gap-y-8">
      <h4>لیست سازمان‌ها</h4>
      <Link
        className="text-sm text-purple-900 border border-purple-900 rounded-lg w-fit py-2 px-4"
        to={"/admin/organization/create"}
      >
        ایجاد سازمان‌
      </Link>
      <div className="min-w-[300px] w-full max-w-[500px] overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>نام</th>
              <th>شماره تماس</th>
              <th>آدرس</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {isLoadingOrg || isFetching ? (
              <tr>
                <td colSpan="4">
                  <div className="flex items-center justify-center p-5">
                    <span>در حال بارگذاری...</span>
                  </div>
                </td>
              </tr>
            ) : organization?.length < 1 ? (
              <tr>
                <td colSpan="4">
                  <div className="flex items-center justify-center p-5">
                    <span>موردی یافت نشد</span>
                  </div>
                </td>
              </tr>
            ) : (
              organization?.map((org) => (
                <OrganizationItem key={org?.id} org={org} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainOrganizationList;
