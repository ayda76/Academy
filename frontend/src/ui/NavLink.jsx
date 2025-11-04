import { Link, useLocation } from "react-router";
const NavLink = ({ path, title, icon, className }) => {
  const { pathname } = useLocation();
  return (
    <Link to={path}>
      <div
        className={`${path === pathname ? "text-purple-800" : "text-secondary-800"} 
        text-sm relative flex items-center gap-1 ${className} `}
      >
        <span className="text-xl">{icon}</span>
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default NavLink;
