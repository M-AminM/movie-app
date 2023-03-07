import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FunctionComponent = () => {
  const links = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Movies", url: "/popular/movies" },
    { id: 3, name: "Tv Series", url: "/popular/tv_series" },
  ];

  return (
    <nav className="flex justify-between md:px-20 px-8 items-center text-white absolute top-6 w-full z-10">
      <h1 className="font-bold sm:text-2xl text-xl">tMovies</h1>
      <ul className="flex justify-center items-center sm:bg-transparent sm:w-auto sm:pb-0 sm:relative sm:gap-4 fixed bottom-0 left-0 w-full bg-gray-600 pb-3 gap-2">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-semibold sm:text-base text-sm  border-b-2 border-red-600"
                  : "font-semibold sm:text-base text-sm text-white "
              }
              to={link.url}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
