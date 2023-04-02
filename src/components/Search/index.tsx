import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { apiConfig } from "../../config/api.config";
import tmdbApi from "../../config/tmdb.config";
import Loading from "../Base/Loading";

const Search = () => {
  const { title, category } = useParams();
  const [isActive, setIsActive] = useState<boolean>();
  console.log(title, category);

  const getSearch = async () => {
    const res = await tmdbApi.search(category, title);
    return res.data;
  };

  const { data, status, isFetching } = useQuery("search", getSearch);

  useEffect(() => {
    setIsActive(isFetching);
  }, [isFetching]);

  if (status === "error") {
    return <div>Error</div>;
  }

  if (status === "loading") {
    return <div>Loading</div>;
  }

  return (
    <div className="pt-20 px-8 md:px-20">
      {isActive ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap gap-8 justify-center py-8">
          {data.results.map((result: any) => {
            return (
              <div className="w-56 " key={result.id}>
                <Link to={`/${category}/${result.id}`}>
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
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
