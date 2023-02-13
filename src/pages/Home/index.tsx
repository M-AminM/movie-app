import React from "react";
import Home from "../../components/Home";

interface HomePageProps extends React.PropsWithChildren {}

const HomePage: React.FunctionComponent<HomePageProps> = (): JSX.Element => {
  return <Home />;
};

export default HomePage;
