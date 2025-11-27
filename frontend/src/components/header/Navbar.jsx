import { PiBooksLight, PiHouseLight, PiInfo } from "react-icons/pi";
import NavLink from "../../ui/NavLink";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = ({ onClose }) => {
  const { pathname } = useLocation();
  const [prevPath, setPrevPath] = useState(pathname);
  useEffect(() => {
    if (prevPath !== pathname) {
      onClose(); // اول ببند
      setPrevPath(pathname); // بعد مسیر جدید را ذخیره کن
    }
  }, [pathname]);

  return (
    <nav>
      <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-5 md:gap-8">
        <NavLink path={"/"} title={"صفحه اصلی"} icon={<PiHouseLight />} />
        <NavLink path={"/courses"} title={"دوره‌ها"} icon={<PiBooksLight />} />
        <NavLink path={"/aboutus"} title={"درباره ما"} icon={<PiInfo />} />
      </ul>
    </nav>
  );
};

export default Navbar;
