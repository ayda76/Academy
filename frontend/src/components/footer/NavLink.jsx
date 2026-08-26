const NavLink = ({ label, Icon, isHover = true }) => {
  return (
    <nav>
      <ul className="flex items-center md:items-start text-sm md:text-base flex-col gap-2">
        <li className="flex items-center gap-2">
          {Icon && <Icon className="text-lg text-purple-500" />}
          <span
            className={`${isHover && "hover:text-purple-800 hover:underline underline-offset-8 cursor-pointer"} text-sm text-secondary-600 transition delay-75`}
          >
            {label}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavLink;
