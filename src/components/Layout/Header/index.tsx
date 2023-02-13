import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const links = [
    { id: 1, name: "Home", url: "/" },
    { id: 1, name: "Movies", url: "/movies" },
    { id: 1, name: "Tv Series", url: "/tv_series" },
  ];

  return (
    <nav className="flex justify-between px-20 items-center text-white absolute top-6 w-full z-10">
      <h1 className="font-bold text-2xl">tMovies</h1>
      <ul className="flex gap-4">
        <li></li>
        {links.map((link) => (
          <li key={link.id}>
            <Link className="font-semibold" to={link.url}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
