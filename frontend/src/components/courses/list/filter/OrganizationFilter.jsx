import useGetOrganization from "../../../../hooks/organization/useGetOrganization";

const OrganizationFilter = ({ orgSelected, setOrgSelected }) => {
  const { organization, isLoadingOrg } = useGetOrganization();
  return (
    <div className="pt-3 border-t border-gray-200">
      <span className="text-sm text-gray-900 inline-block mb-2">
        براساس سازمان
      </span>
      <div className="w-full h-[40vh] md:h-[100px] md:max-h-[200px] overflow-auto">
        {isLoadingOrg ? (
          Array.from({ length: 3 }).map((arr, index) => (
            <div
              className="bg-secondary-100 animate-pulse w-1/2 p-2 rounded-md my-1"
              key={index}
            ></div>
          ))
        ) : organization?.length < 1 ? (
          <p className="text-sm text-secondary-800 my-3">موردی یافت نشد.</p>
        ) : (
          <>
            <div className="text-sm my-2 text-secondary-800 flex items-center gap-1.5">
              <input
                className="cursor-pointer"
                type="radio"
                name="organization"
                id="all"
                checked={!orgSelected}
                onChange={() => setOrgSelected("")}
              />
              <label className="cursor-pointer" htmlFor="all">
                همه
              </label>
            </div>
            {organization?.map((org) => (
              <div
                key={org?.id}
                className="text-sm my-2 text-secondary-800 flex items-center gap-1.5"
              >
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="organization"
                  id={org?.id}
                  checked={orgSelected === org?.name}
                  onChange={() => setOrgSelected(org?.name)}
                />
                <label
                  htmlFor={org?.id}
                  className="line-clamp-1 cursor-pointer"
                >
                  {org?.name}
                </label>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default OrganizationFilter;
