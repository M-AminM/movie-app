import React from "react";
import { Link } from "react-router-dom";

interface FooterProps extends React.PropsWithChildren {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  const data = {
    left: [
      { id: 1, name: "Home", url: "/" },
      { id: 2, name: "Contact us", url: "/" },
      { id: 3, name: "Term of services", url: "/" },
      { id: 4, name: "About us", url: "/" },
    ],
    center: [
      { id: 1, name: "Live", url: "/" },
      { id: 2, name: "FAQ", url: "/" },
      { id: 3, name: "Premium", url: "/" },
      { id: 4, name: "Privacy policy", url: "/" },
    ],
    right: [
      { id: 1, name: "You must watch", url: "/" },
      { id: 2, name: "Recent release", url: "/" },
      { id: 3, name: "Top IMDB", url: "/" },
    ],
  };

  return (
    <div
      className="h-[80vh] text-white  flex justify-center items-center flex-col"
      style={{ backgroundImage: "url('/assets/footer-bg.jpg')" }}
    >
      <h1 className="text-3xl font-bold mb-10">tMovies</h1>
      <div className="flex flex-wrap px-8 sm:flex-row sm:gap-20 gap-10">
        <ul className="flex flex-col gap-4">
          {data.left.map((data) => (
            <li
              className="text-lg font-semibold hover:text-red-500 duration-300 ease-in-out"
              key={data.id}
            >
              <Link to={data.url}>{data.name}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-4">
          {data.center.map((data) => (
            <li
              className="text-lg font-semibold hover:text-red-500 duration-300 ease-in-out"
              key={data.id}
            >
              <Link to={data.url}>{data.name}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-4">
          {data.right.map((data) => (
            <li
              className="text-lg font-semibold hover:text-red-500 duration-300 ease-in-out"
              key={data.id}
            >
              <Link to={data.url}>{data.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
