import React, { Fragment } from "react";
import Slider from "../Slider";
import TopRatedLayout from "../TopRated";
import TrendingLayout from "../Trending";

interface LayoutProps extends React.PropsWithChildren {}
const Layout: React.FunctionComponent<LayoutProps> = () => {
  return (
    <Fragment>
      <Slider />
      <TrendingLayout />
      <TopRatedLayout />
    </Fragment>
  );
};

export default Layout;
