import React from "react";

const SearchBar: React.FunctionComponent = () => {
  return (
    <>
      <div
        className="h-[20vh] text-white flex justify-end items-center flex-col"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0 , .8) , rgba(0, 0, 0 , .1)), url('/assets/footer-bg.jpg')",
        }}
      >
        <h1 className="font-bold text-lg pb-2">Movies</h1>
      </div>
      <div className="pt-8 flex h-full px-20">
        <input
          className="px-4 py-2 w-80 bg-black text-gray-400 border-none outline-0 rounded-l-xl text-sm"
          type="text"
          placeholder="Enter keyword"
        />
        <button className="bg-red-600 text-white px-3 pt-1 flex justify-center rounded-r-xl">
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
