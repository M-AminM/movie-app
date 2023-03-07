import React from "react";
import { Route, Routes } from "react-router";
import ScrollToTop from "./components/Base/ScrollTop";
import Layout from "./components/Layout";
import DetailPage from "./pages/Detail";
import HomePage from "./pages/Home";
import MoviesPage from "./pages/Movies";
import TVPage from "./pages/TV";

const App: React.FunctionComponent = () => {
  return (
    <div className="bg-zinc-900">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:category/:id" element={<DetailPage />} />
          <Route path="/:category/movies" element={<MoviesPage />} />
          <Route path="/:category/tv_series" element={<TVPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
