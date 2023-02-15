import React, { Fragment } from "react";
import TopRatedMovies from "./Movies";
import TopRatedTv from "./Tv";

const TopRatedLayout: React.FunctionComponent = () => {
  return (
    <Fragment>
      <TopRatedMovies />
      <TopRatedTv />
    </Fragment>
  );
};

export default TopRatedLayout;
