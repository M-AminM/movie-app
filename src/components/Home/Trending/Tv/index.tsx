import React from "react";
import { useQuery } from "react-query";
import tmdbApi, { TvType } from "../../../../config/tmdb.config";
import Loading from "../../../Base/Loading";
import Card from "../../../Card/SwiperCard";

interface TrendingTvProps extends React.PropsWithChildren {}

const TrendingTv: React.FunctionComponent<TrendingTvProps> = () => {
  const getTrendingTv = async () => {
    const res = await tmdbApi.getTvList(TvType.popular);
    return res.data.results;
  };

  const { data, status } = useQuery("trending_tv", getTrendingTv);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return <Card data={data} title="Trending TV" />;
};

export default TrendingTv;
