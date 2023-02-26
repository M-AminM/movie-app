import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { apiConfig } from "../../config/api.config";
import tmdbApi from "../../config/tmdb.config";
import Loading from "../Base/Loading";
import "./detail.css";

interface DetailProps extends React.PropsWithChildren {}

const Detail: React.FunctionComponent<DetailProps> = () => {
  const { category, id } = useParams();
  const [active, setActive] = useState<boolean>();
  const getDetail = async () => {
    const res = await tmdbApi.detail(category, id);
    return res.data;
  };

  const { data, status, isFetching } = useQuery("detail", getDetail, {
    refetchOnMount: true,
  });

  useEffect(() => {
    setActive(isFetching);
  }, [isFetching]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <>
      {!active ? (
        <div
          className="banner flex md:flex-row flex-col gap-10 md:justify-between justify-end items-center text-white px-8 pb-4 md:px-20"
          style={{
            backgroundImage: `url(${apiConfig.originalImage(
              data.backdrop_path
            )})`,
          }}
        >
          <img
            className="md:w-64 w-32 z-10 rounded-3xl"
            src={apiConfig.originalImage(data.poster_path)}
          />
          <div className="z-10 flex flex-col gap-2">
            <h1 className="text-3xl font-bold">
              {data.name || data.title}{" "}
              <span className="font-normal text-gray-400 text-2xl">
                {new Date(
                  data.last_air_date || data.release_date
                ).getFullYear()}
              </span>
            </h1>

            <div className="flex gap-2">
              {data.genres?.map((data: any) => (
                <h3 key={data.id}>{data.name}</h3>
              ))}

              <h3>{category === "tv" ? "" : "." + data.runtime + "m"} </h3>
            </div>
            <p className="text-gray-400">{data.tagline}</p>

            <h3 className="font-semibold text-lg">Overview</h3>

            <p className="-96">{data.overview}</p>
            {category === "tv" && (
              <>
                <h3 className="text-lg font-semibold">Creator</h3>

                <div className="flex gap-3">
                  {data.created_by?.map((data: any) => (
                    <div className="flex flex-col" key={data.id}>
                      <h1>{data.name}</h1>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Detail;
