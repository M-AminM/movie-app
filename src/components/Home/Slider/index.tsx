import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import tmdbApi from "../../../config/tmdb.config";
import { MovieType } from "../../../config/tmdb.config";
import { useQuery } from "react-query";
import { apiConfig } from "../../../config/api.config";

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
          <div
            className="bg-cover bg-center h-screen flex justify-around items-center "
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                movie.backdrop_path
              )})`,
            }}
          >
            <div className="flex flex-col">
              <h2 className="text-white text-3xl font-semibold">
                {movie.original_title}
              </h2>
              <p className="text-white text-lg w-96">{movie.overview}</p>
            </div>
            <img
              className="w-64 rounded-xl"
              src={apiConfig.originalImage(movie.poster_path)}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
