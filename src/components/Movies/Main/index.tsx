import axios from "axios";
import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import tmdbApi, { MovieType } from "../../../config/tmdb.config";
import Loading from "../../Base/Loading";

const Main = () => {
  const getTopRatedMovies = async (pageParam: any) => {
    const res = await axios(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=47e88a22badd5295613291458ed85c99",
      {
        params: { _page: pageParam, _sort: "title", _limit: 8 },
      }
    );

    console.log(res.data);

    return res.data.results;
  };
  const { data, status, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["posts", "infinite"],
      getNextPageParam: (prevData: any) => prevData.nextPage,
      queryFn: ({ pageParam = 1 }) => getTopRatedMovies(pageParam),
    });

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <div>Error</div>;
  }
  //   console.log(data?.pages[0]);

  return (
    <div>
      {data?.pages[0].map((data: any) => (
        <div>
          <h3 className="text-white">{data.original_title}</h3>
        </div>
      ))}
      <button
        className="bg-red-600 px-4 py-1 text-white"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </button>
    </div>
  );
};

export default Main;
