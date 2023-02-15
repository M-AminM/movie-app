import React, { Fragment } from "react";
import TrendingMovies from "./Movies";
import TrendingTv from "./Tv";

const TrendingLayout: React.FunctionComponent = () => {
  return (
    <Fragment>
      <TrendingMovies />
      <TrendingTv />
    </Fragment>
  );
};

export default TrendingLayout;
