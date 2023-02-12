import axios from "axios";

export const AXIOS = axios.create({
  timeout: 20000,
  baseURL: "https://api.themoviedb.org/3/",
});
