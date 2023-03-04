import React from "react";
import "swiper/css";
import { apiConfig } from "../../../config/api.config";
import { Link } from "react-router-dom";

interface SwiperCardProps extends React.PropsWithChildren {
  data: any;
  title: string;
}

const SwiperCard: React.FunctionComponent<SwiperCardProps> = (props) => {
  const { data, title } = props;
  
  return (
    <div className="px-8 md:px-20">

      <div className="flex flex-wrap gap-8 justify-center py-8">
        {data?.map((page: any) =>
          page.results.map((result: any) => (
            <div className="w-56 " key={result.id}>
              <Link
                to={`/${
                  title === "Trending movies" || title === "Top rated movies"
                    ? "movie"
                    : "tv"
                }/${result.id}`}
              >
                <div className="overflow-hidden cursor-pointer rounded-xl relative group">
                  <div className="rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                    <div>
                      <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                        <p className="font-bold z-10">
                          {result.original_title || result.original_name}
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="object-cover group-hover:opacity-20 group-hover:scale-110 transition duration-300 ease-in-out rounded-xl "
                    src={apiConfig.originalImage(result.poster_path)}
                  />
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SwiperCard;
