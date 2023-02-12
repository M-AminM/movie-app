import { apiConfig } from "./api.config";
import { AXIOS } from "./axios.config";

export enum MovieType {
  upcoming = "upcoming",
  popular = "popular",
  top_rated = "top_rated",
}

export enum TvType {
  popular = "popular",
  top_rated = "top_rated",
  on_the_air = "on_the_air",
}

const tmdbApi = {
  getMoviesList: (type: MovieType) => {
    const url = "movie/" + MovieType[type] + apiConfig.apiKey;
    return AXIOS.get(url);
  },

  getTvList: (type: TvType) => {
    const url = "tv/" + TvType[type] + apiConfig.apiKey;
    return AXIOS.get(url);
  },
};

export default tmdbApi;
