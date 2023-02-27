import React from "react";
import { useQuery } from "react-query";
import tmdbApi from "../../config/tmdb.config";
import Loading from "../Base/Loading";

interface VideosProps extends React.PropsWithChildren {
  category: any;
  id: any;
}
const Videos: React.FunctionComponent<VideosProps> = ({ category, id }) => {
  const getTrailer = async () => {
    const res = await tmdbApi.getVideos(category, id);
    return res.data;
  };

  const { data, status } = useQuery("videos", getTrailer);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  const { results } = data;
  const videSrc = "https://www.youtube.com/embed/" + results[0].key;

  return (
    <div>
      <iframe
      className="w-full md:w-[43rem] lg:w-[53rem] h-[30rem]"
        src={videSrc}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default Videos;
