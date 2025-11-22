import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center mt-8 mx-auto w-[80%] sm:w-[400px] gap-4 p-4 bg-secondary-100 rounded-lg">
      <p className="text-center text-secondary-600">سفارشی ثبت نشده</p>
      <div className="w-full h-[200px]">
        <img
          src="/assets/images/cart/empty-cart.svg"
          alt="سفارشی ثیت نشده"
          className="w-[200px] h-[200px] mx-auto"
        />
      </div>
      <Link
        to={"/courses"}
        className="bg-purple-800 border border-purple-800 text-white hover:bg-white hover:text-purple-800 hover:shadow-md p-1.5 px-5 text-sm rounded-lg text-center w-[200px] mx-auto"
      >
        مشاهده دوره‌ها
      </Link>
    </div>
  );
};

export default EmptyCart;
