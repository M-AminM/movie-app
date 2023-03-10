import React, { Fragment } from "react";
import SearchBar from "../Base/Search";
import Main from "./Main";

interface MoviesProps extends React.PropsWithChildren {}
const Movies: React.FunctionComponent<MoviesProps> = () => {
  return (
    <Fragment>
      <SearchBar title="Movies" />
      <Main />
    </Fragment>
  );
};

export default Movies;
