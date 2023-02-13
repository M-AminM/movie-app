import React from "react";
import tmdbApi, { MovieType } from "../../../config/tmdb.config";
import { useQuery } from "react-query";
import { apiConfig } from "../../../config/api.config";

const Trending = () => {
  const getMovies = async () => {
    const res = await tmdbApi.getMoviesList(MovieType.popular);
    // const res1 = await tmdbApi.getTvList(TvType.popular);

    return res.data.results;
  };

  const { data, status } = useQuery("trending", getMovies);

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <div>
      {data.map((movie: any) => (
        <div>
          <h3>{movie.original_title}</h3>
          <img
            className="w-64 rounded-xl"
            src={apiConfig.originalImage(movie.poster_path)}
          />
        </div>
      ))}
    </div>
  );
};

export default Trending;
