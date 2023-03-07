import React from "react";
import Movies from "../../components/Movies";

interface MoviesPageProps extends React.PropsWithChildren {}
const MoviesPage: React.FunctionComponent<MoviesPageProps> = () => {
  return <Movies />;
};

export default MoviesPage;
