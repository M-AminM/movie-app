import axios from "axios";
import React, { useEffect } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import tmdbApi, { MovieType } from "../../../config/tmdb.config";
import Loading from "../../Base/Loading";
import SwiperCard from "../../Card/AllCard";

const Main = () => {
  const getTopRatedMovies = async (pageParam: any) => {
    const res = await tmdbApi.getMoviesList(MovieType.top_rated);
    return res.data.results;
  };
  // const { data, status, hasNextPage, fetchNextPage, isFetchingNextPage } =
  //   useInfiniteQuery({
  //     queryKey: ["posts", "infinite"],
  //     getNextPageParam: (prevData: any) => prevData.nextPage,
  //     queryFn: ({ pageParam = 1 }) => getTopRatedMovies(pageParam),
  //   });
  const { data, status } = useQuery("top_all_rated_movies", getTopRatedMovies);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div>
      <SwiperCard data={data} title="Top rated movies" />{" "}
    </div>
  );
};

export default Main;
