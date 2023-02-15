import React from "react";
import { useQuery } from "react-query";
import tmdbApi, { TvType } from "../../../../config/tmdb.config";
import Card from "../../../Card";

interface TrendingTvProps extends React.PropsWithChildren {}

const TrendingTv: React.FunctionComponent<TrendingTvProps> = () => {
  const getTrendingTv = async () => {
    const res = await tmdbApi.getTvList(TvType.popular);
    return res.data.results;
  };

  const { data, status } = useQuery("trending_tv", getTrendingTv);

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return <Card data={data} title="Trending TV" />;
};

export default TrendingTv;
