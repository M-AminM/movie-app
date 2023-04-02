import { apiConfig } from "./api.config";
import { AXIOS } from "./axios.config";

export const category: any = {
  movie: "movie",
  tv: "tv",
};

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

  detail: (cate: any, id: any) => {
    const url = category[cate] + "/" + id + apiConfig.apiKey;
    return AXIOS.get(url);
  },

  getVideos: (cate: any, id: any) => {
    const url = category[cate] + "/" + id + "/videos" + apiConfig.apiKey;
    return AXIOS.get(url);
  },

  similar: (cate: any, id: any) => {
    const url = category[cate] + "/" + id + "/similar" + apiConfig.apiKey;
    return AXIOS.get(url);
  },

  search: (cate: any, title: any) => {
    const url =
      "search/" + category[cate] + apiConfig.apiKey + `&query=${title}`;
    return AXIOS.get(url);
  },
};

export default tmdbApi;
