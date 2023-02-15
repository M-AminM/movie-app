import React from "react";
import { useQuery } from "react-query";
import tmdbApi, { MovieType } from "../../../../config/tmdb.config";
import Card from "../../../Card";

interface TopRatedMoviesProps extends React.PropsWithChildren {}

const TopRatedMovies: React.FunctionComponent<TopRatedMoviesProps> = () => {
  const getTopRatedMovies = async () => {
    const res = await tmdbApi.getMoviesList(MovieType.top_rated);

    return res.data.results;
  };

  const { data, status } = useQuery("top_rated_movies", getTopRatedMovies);

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }
  return <Card data={data} title="Top rated movies" />;
};

export default TopRatedMovies;
