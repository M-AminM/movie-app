import React, { Fragment } from "react";
import Main from "../Main";
import SearchBar from "../SearchBar";

interface LayoutProps extends React.PropsWithChildren {}

const Layout: React.FunctionComponent<LayoutProps> = () => {
  return (
    <Fragment>
      <SearchBar />
      <Main />
    </Fragment>
  );
};

export default Layout;
