const OnlineCourseFilter = ({ isOnline, setIsOnline }) => {
  const data = [
    {
      id: 1,
      name: "همه",
      value: "",
    },
    {
      id: 2,
      name: "آنلاین",
      value: true,
    },
    {
      id: 3,
      name: "آفلاین",
      value: false,
    },
  ];
  return (
    <div className="pt-3 border-t border-gray-200">
      <span className="text-sm text-gray-900 inline-block mb-2">
        براساس نوع
      </span>
      <div className="w-full h-fit overflow-auto">
        {data?.map((d) => (
          <div
            key={d?.id}
            className="text-sm my-2 text-secondary-800 flex items-center gap-1.5"
          >
            <input
              className="cursor-pointer"
              type="radio"
              name="courseType"
              id={d?.name}
              checked={isOnline === d?.value}
              onChange={() => setIsOnline(d?.value)}
            />
            <label htmlFor={d?.name} className="line-clamp-1 cursor-pointer">
              {d?.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineCourseFilter;
