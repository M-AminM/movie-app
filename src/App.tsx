import React, { useEffect, useState } from "react";
import { MovieType, TvType } from "./config/tmdb.config";
import tmdbApi from "./config/tmdb.config";
import { apiConfig } from "./config/api.config";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await tmdbApi.getMoviesList(MovieType.popular);
    const res1 = await tmdbApi.getTvList(TvType.popular);
    console.log(res1);

    setData(res.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {data.map((da: any, index) => (
        <div key={index}>
          <h5>{da.original_title}</h5>
          <img
            src={apiConfig.w500Image(da.poster_path)}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
