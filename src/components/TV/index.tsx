import React, { Fragment } from "react";
import SearchBar from "../Base/Search";
import Main from "./Main";

const TV: React.FunctionComponent = () => {
  return (
    <Fragment>
      <SearchBar />
      <Main />
    </Fragment>
  );
};

export default TV;
