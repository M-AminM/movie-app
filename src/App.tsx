import React, { useEffect, useState } from "react";
import { MovieType, TvType } from "./config/tmdb.config";
import tmdbApi from "./config/tmdb.config";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await tmdbApi.getMoviesList(MovieType.popular);
    // const res1 = await tmdbApi.getTvList(TvType.popular);

    setData(res.data.results.slice(0, 4));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-red-400">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home data={data} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
