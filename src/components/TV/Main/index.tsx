import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Base/Loading";
import SwiperCard from "../../Card/AllCard";

interface MainProps extends React.PropsWithChildren {}

const Main: React.FunctionComponent<MainProps> = () => {
  const { category } = useParams();

  const fetchInfiniteMovies = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${category}?api_key=47e88a22badd5295613291458ed85c99&page=${pageParam}`
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return response.json();
  };

  const { data, status, fetchNextPage, hasNextPage, refetch, isRefetching } =
    useInfiniteQuery("tv_series", fetchInfiniteMovies, {
      getNextPageParam: (lastPage: any) => {
        if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
        return false;
      },
    });

  useEffect(() => {
    refetch();
  }, [category]);

  if (status === "loading" || isRefetching) {
    return <Loading />;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div>
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

export default Main;
