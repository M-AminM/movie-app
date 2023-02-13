import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import tmdbApi from "../../../config/tmdb.config";
import { MovieType } from "../../../config/tmdb.config";
import { useQuery } from "react-query";
import { apiConfig } from "../../../config/api.config";
import Button from "../../Base/Button";

interface SliderProps extends React.PropsWithChildren {}

const Slider: React.FunctionComponent<SliderProps> = (): JSX.Element => {
  const getMovies = async () => {
    const res = await tmdbApi.getMoviesList(MovieType.popular);
    // const res1 = await tmdbApi.getTvList(TvType.popular);
    return res.data.results.slice(0, 4);
  };

  const { data, status } = useQuery("movies", getMovies);

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }
  return (
    <Swiper slidesPerView={1} loop={true}>
      {data.map((movie: any) => (
        <SwiperSlide key={movie.id}>
          {({ isActive }) => (
            <div
              className={`!bg-cover h-screen flex justify-around items-center `}
              style={{
                background: `linear-gradient(0deg, rgba(0,0, 0,0.5), rgba(0,0, 0,0.5)), url(${apiConfig.originalImage(
                  movie.backdrop_path
                )})`,
              }}
            >
              <div
                className={`flex flex-col gap-4 w-2/5 ${
                  isActive
                    ? "translate-y-0 duration-700 ease-in-out"
                    : "translate-y-full duration-700 ease-in-out"
                }`}
              >
                <h2 className="text-white text-3xl font-semibold">
                  {movie.original_title}
                </h2>
                <p className="text-white text-lg ">{movie.overview}</p>
                <div className="flex gap-4">
                  <Button variant="primary">Watch now</Button>
                  <Button variant="secondary">Watch trailer</Button>
                </div>
              </div>
              <img
                className={`w-64 rounded-xl ${
                  isActive
                    ? "scale-100 duration-700 ease-in-out"
                    : "scale-0 duration-700 ease-in-out"
                }`}
                src={apiConfig.originalImage(movie.poster_path)}
              />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
