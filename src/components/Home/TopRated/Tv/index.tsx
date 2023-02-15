import React from "react";
import { useQuery } from "react-query";
import tmdbApi, { TvType } from "../../../../config/tmdb.config";
import Card from "../../../Card";

interface TopRatedTvProps extends React.PropsWithChildren {}

const TopRatedTv: React.FunctionComponent<TopRatedTvProps> = () => {
  const getTopRatedMovies = async () => {
    const res = await tmdbApi.getTvList(TvType.top_rated);

    return res.data.results;
  };

  const { data, status } = useQuery("top_rated_tv", getTopRatedMovies);

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }
  return <Card data={data} title="Top rated TV" />;
};

export default TopRatedTv;
