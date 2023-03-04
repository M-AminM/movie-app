import React from "react";
import { useInfiniteQuery } from "react-query";
import Loading from "../../Base/Loading";
import SwiperCard from "../../Card/AllCard";

const fetchInfiniteMovies = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=47e88a22badd5295613291458ed85c99&page=${pageParam}`
  );
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  return response.json();
};

interface AllMoviesProps extends React.PropsWithChildren {}

const AllMovies: React.FunctionComponent<AllMoviesProps> = () => {
  const { data, isLoading, isFetching, fetchNextPage, hasNextPage, error } =
    useInfiniteQuery("users", fetchInfiniteMovies, {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
        return false;
      },
    });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <SwiperCard data={data?.pages} title="Top rated movies" />
      {hasNextPage && (
        <div className="w-full flex justify-center items-center pb-6">
          <button
            className=" bg-red-600 px-3 py-2 rounded-xl text-white"
            onClick={() => fetchNextPage()}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default AllMovies;
