import React from "react";
import "./navbar.style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/Videos",
      text: "Videos",
    },
    {
      id: 2,
      path: "/About",
      text: "About",
    },
    {
      id: 3,
      path: "/Contact",
      text: "Contact",
    },
  ];

  return (
    <div className="navb">
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink
                to={link.path}
                activeClassName="active-link"
                exact
                className="mojLink"
              >
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
