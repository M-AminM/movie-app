import React, { Fragment } from "react";
import SearchBar from "./SearchBar";
import Main from "./Main";

interface MoviesProps extends React.PropsWithChildren {}
const Movies: React.FunctionComponent<MoviesProps> = () => {
  return (
    <Fragment>
      <SearchBar />
      <Main />
    </Fragment>
  );
};

export default Movies;
