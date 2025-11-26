import AddToCartButton from "../../../ui/AddToCartButton";

const CourseDetailsCard = ({ course }) => {
  return (
    <div className="fixed bottom-0 right-0 left-0 flex flex-row-reverse justify-between lg:block lg:col-span-1 lg:sticky lg:space-y-4 lg:top-24 h-fit lg:-mt-72 p-5 border border-secondary-200 bg-secondary-50 lg:rounded-xl shadow">
      <div className="w-full hidden lg:block aspect-9/5 overflow-hidden rounded-md bg-gray-100">
        <img
          src={course?.image || "/assets/images/course/not-found.jpg"}
          alt={course?.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-secondary-600 font-semibold hidden lg:inline-block">
          هزینه آموزش
        </span>
        <span className="text-sm">
          <strong>{+course?.price}</strong> تومان
        </span>
      </div>
      <div className="hidden lg:flex items-center justify-between">
        <span className="text-xs text-secondary-600 font-semibold hidden lg:inline-block">
          سازمان
        </span>
        <span className="text-sm">
          <strong>{course?.organization?.name || "-"}</strong>
        </span>
      </div>
      <AddToCartButton
        id={course?.id}
        name={course?.name}
        price={course?.price}
      />
    </div>
  );
};

export default CourseDetailsCard;
