import React from "react";
import tmdbApi, { MovieType } from "../../../config/tmdb.config";
import { useQuery } from "react-query";
import { apiConfig } from "../../../config/api.config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Pagination } from "swiper";
import Button from "../../Base/Button";

const Trending = () => {
  const getMovies = async () => {
    const res = await tmdbApi.getMoviesList(MovieType.popular);
    // const res1 = await tmdbApi.getTvList(TvType.popular);

    return res.data.results;
  };

  const { data, status } = useQuery("trending", getMovies);

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div className="px-8 md:px-20">
      <div className="flex justify-between items-center py-6">
        <h1 className="pb-3 text-white font-bold text-xl">Trending movies</h1>
        <Button variant="secondary">View more</Button>
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        {data.map((movie: any, index: number) => (
          <div key={movie.id}>
            {index < 10 && (
              <SwiperSlide className="w-56" key={movie.id}>
                <div className="overflow-hidden cursor-pointer rounded-xl relative group">
                  <div className="rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                    <div>
                      <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                        <button className="font-bold">
                          {movie.original_title}
                        </button>
                      </div>
                    </div>
                  </div>
                  <img
                    className=" object-cover group-hover:opacity-20 group-hover:scale-110 transition duration-300 ease-in-out rounded-xl "
                    src={apiConfig.originalImage(movie.poster_path)}
                  />
                </div>
              </SwiperSlide>
            )}
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Trending;
