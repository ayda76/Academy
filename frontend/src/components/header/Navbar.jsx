import {
  PiBasketDuotone,
  PiBooksLight,
  PiHouseLight,
  PiInfo,
  PiShoppingCartSimpleLight,
} from "react-icons/pi";
import NavLink from "../../ui/NavLink";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-5 md:gap-8">

        <NavLink path={"/"} title={"صفحه اصلی"} icon={<PiHouseLight />} />
        <NavLink path={"/courses"} title={"دوره‌ها"} icon={<PiBooksLight />} />
        <NavLink path={"/aboutus"} title={"درباره ما"} icon={<PiInfo />} />
        <NavLink
          path={"/cart"}
          title={"سبد خرید"}
          icon={<PiShoppingCartSimpleLight />}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
