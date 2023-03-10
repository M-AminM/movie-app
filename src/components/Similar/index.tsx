import React from "react";
import { useQuery } from "react-query";
import tmdbApi from "../../config/tmdb.config";
import Loading from "../Base/Loading";
import SwiperCards from "../Card/SwiperCard";

interface SimilarProps extends React.PropsWithChildren {
  category: any;
  id: any;
}
const Similar: React.FunctionComponent<SimilarProps> = ({ category, id }) => {
  const getSimilar = async () => {
    const res = await tmdbApi.similar(category, id);
    return res.data.results;
  };

  const { data, status } = useQuery("similar", getSimilar);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <>
      {data.length > 0 ? (
        <div className="pb-6">
          <SwiperCards data={data} title="Similar movies" />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Similar;
