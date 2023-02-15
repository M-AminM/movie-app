import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { apiConfig } from "../../config/api.config";
import tmdbApi from "../../config/tmdb.config";
import Button from "../Base/Button";
import "./detail.css";

const Detail = () => {
  const { category, id } = useParams();
  //   console.log(category, id);
  const getDetail = async () => {
    const res = await tmdbApi.detail(category, id);

    return res.data;
  };

  const { data, status } = useQuery("detail", getDetail);

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }
  console.log(data);

  return (
    <div
      className="banner flex md:flex-row flex-col gap-10 md:justify-between justify-end items-center text-white px-8 pb-4 md:px-20"
      style={{
        backgroundImage: `url(${apiConfig.originalImage(data.backdrop_path)})`,
      }}
    >
      <img
        className="md:w-64 w-32 z-10 rounded-3xl"
        src={apiConfig.originalImage(data.poster_path)}
      />
      <div className="z-10 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">
          {data.name}{" "}
          <span className="font-normal text-gray-400 text-2xl">
            {new Date(data.last_air_date).getFullYear()}
          </span>
        </h1>

        <div className="flex gap-2">
          {data.genres.map((data: any) => (
            <h3 key={data.id}>{data.name}</h3>
          ))}
          <span className="font-bold">.</span>
          <h3>{data.episode_run_time[0]} m</h3>
        </div>

        {/* <div className="flex gap-2 items-center">
          <div className=" rounded-full w-10 h-10 bg-slate-900 relative border-2 border-green-300">
            <h4 className="pl-3.5 pt-1.5">{Math.round(data.vote_average)}</h4>
          </div>
          <p>User Score</p>
        </div> */}
        <p className="text-gray-400">{data.tagline}</p>

        <h3 className="font-semibold text-lg">Overview</h3>

        <p className="-96">{data.overview}</p>
        <h3 className="text-lg font-semibold">Creator</h3>

        <div className="flex gap-3">
          {data.created_by.map((data: any) => (
            <div className="flex flex-col" key={data.id}>
              <h1>{data.name}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="z-10">
        <h2 className="text-3xl font-semibold">Last episode to air </h2>
        <h3 className="text-xl font-semibold">
          {data.last_episode_to_air.name}
        </h3>
        <p>Date: {data.last_episode_to_air.air_date}</p>
        <p>
          Episode: {data.last_episode_to_air.episode_number} Season:{" "}
          {data.last_episode_to_air.season_number}
        </p>
        <img
          className="w-44"
          src={apiConfig.w500Image(data.last_episode_to_air.still_path)}
        />
      </div> */}
    </div>
  );
};

export default Detail;
