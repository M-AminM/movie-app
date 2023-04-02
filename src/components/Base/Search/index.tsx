import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface SearchBarProps extends React.PropsWithChildren {
  title: string;
}
const SearchBar: React.FunctionComponent<SearchBarProps> = ({ title }) => {
  const inputRef = useRef<any>();
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/search/${inputRef.current.value}`);
  };

  return (
    <>
      <div
        className="h-[20vh] text-white flex justify-end items-center flex-col"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0 , .8) , rgba(0, 0, 0 , .1)), url('/assets/footer-bg.jpg')",
        }}
      >
        <h1 className="font-bold text-lg pb-2">{title}</h1>
      </div>
      <div className="pt-8 flex justify-center h-full px-8 ">
        <input
          className="px-4 py-2 w-80 bg-black text-gray-400 border-none outline-0 rounded-l-xl text-sm"
          type="text"
          placeholder="Enter keyword"
          ref={inputRef}
        />
        <button
          onClick={clickHandler}
          className="bg-red-600 text-white px-3 pt-1 flex justify-center rounded-r-xl"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
