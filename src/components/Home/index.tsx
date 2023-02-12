import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { apiConfig } from "../../config/api.config";

interface HomeProps extends React.PropsWithChildren {
  data: any;
}

const Home: React.FunctionComponent<HomeProps> = ({ data }) => {
  return (
    <Swiper slidesPerView={1} loop={true}>
      {data.map((movie: any) => (
        <SwiperSlide>
          <div
            key={movie.id}
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

export default Home;
