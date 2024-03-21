const trendingUrl = "/api/trending/movie/day";

export const useMovieTrending = async () => {
  const { data } = await useAPI(trendingUrl);
  return data.value;
};

export const useMovieTrendingStore = async (body: any) => {
  const { data } = await useAPI(trendingUrl, { body });
  return data;
};

export const useMovieTrendingById = async (id: number) => {
  const { data } = await useAPI(`${trendingUrl}/${id}`);
  return data.value;
};
