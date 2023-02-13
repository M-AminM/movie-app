import React from "react";
import Layout from "./Layout";

interface HomeProps extends React.PropsWithChildren {}

const Home: React.FunctionComponent<HomeProps> = (): JSX.Element => {
  return <Layout />;
};

export default Home;
