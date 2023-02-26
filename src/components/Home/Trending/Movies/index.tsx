import React from "react";
import tmdbApi, { MovieType } from "../../../../config/tmdb.config";
import { useQuery } from "react-query";
import "swiper/css";
import Card from "../../../Card/SwiperCard";
import Loading from "../../../Base/Loading";

interface TrendingMoviesProps extends React.PropsWithChildren {}

const TrendingMovies: React.FunctionComponent<TrendingMoviesProps> = () => {
  const getTrendingMovies = async () => {
    const res = await tmdbApi.getMoviesList(MovieType.popular);
    return res.data.results;
  };

  const { data, status } = useQuery("trending", getTrendingMovies);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return <Card data={data} title="Trending movies" />;
};

export default TrendingMovies;
