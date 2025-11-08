import React from "react";

const NavLink = () => {
  return (
    <nav>
      <ul className="flex items-center md:items-start text-sm md:text-base flex-col gap-2">
        <li>
          <span className="text-secondary-700">درباره ما</span>
        </li>
        <li>
          <span className="text-secondary-700">تماس با ما</span>
        </li>
        <li>
          <span className="text-secondary-700">خدمات ما</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavLink;
