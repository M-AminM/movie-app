import React from "react";
import { Link } from "react-router-dom";

const Header: React.FunctionComponent = () => {
  const links = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Movies", url: "/popular/movies" },
    { id: 3, name: "Tv Series", url: "/popular/tv_series" },
  ];

  return (
    <nav className="flex justify-between md:px-20 px-8 items-center text-white absolute top-6 w-full z-10">
      <h1 className="font-bold sm:text-2xl text-xl">tMovies</h1>
      <ul className="flex sm:gap-4 gap-2">
        {links.map((link) => (
          <li key={link.id}>
            <Link className="font-semibold sm:text-base text-sm" to={link.url}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
