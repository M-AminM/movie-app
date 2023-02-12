type ApiConfig = {
  apiKey: string;
  originalImage: (imgPath: string) => string;
  w500Image: (imgPath: string) => string;
};

export const apiConfig: ApiConfig = {
  apiKey: "?api_key=47e88a22badd5295613291458ed85c99",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
