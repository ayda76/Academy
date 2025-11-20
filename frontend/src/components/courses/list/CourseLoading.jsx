const CourseLoading = () => {
  const array = Array.from({ length: 3 });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      {array?.map((arr, index) => (
        <div key={index} className="w-full max-w-[250px] mx-auto">
          <div className="rounded-xl flex flex-col gap-2 border border-gray-200 bg-secondary-50/30 p-3 animate-pulse">
            <div className="w-full aspect-9/5 overflow-hidden rounded-md bg-gray-100"></div>
            <div className="p-2 w-1/2 bg-gray-100 rounded-md"></div>
            <span className="my-2 p-2 w-1/4 rounded-full bg-gray-100"></span>
            <div className="border-t border-gray-200 pt-3">
              <div className=" bg-gray-100 p-2 rounded-md"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseLoading;
