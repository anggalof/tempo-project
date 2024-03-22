const trendingUrl = "/api/trending/movie/week?page=1&per_page=3";
const discoverUrl = "/api/discover/movie";
const favoriteUrl = "/api/account/8244407/favorite";
const popularUrl = "/api/movie/popular";

export const useMovieTrending = async () => {
  const { data } = await useAPI(trendingUrl);
  return data.value;
};

export const useDiscoverMovies = async (page: number) => {
  const { data } = await useAPI(`${discoverUrl}?page=${page}&sort_by=popularity.desc`);
  return data.value;
};

export const usePopularMovies = async () => {
  const { data } = await useAPI(popularUrl);
  return data.value;
};

export const useFavoriteMovies = async () => {
  const { data } = await useAPI(`${favoriteUrl}/movies`);
  return data.value;
};

export const useAddFavorite = async (payload: any) => {
  const data = await useAPI(`${favoriteUrl}`, {
    method: 'POST',
    headers: {
      'Append': 'application/json',
      'Content-Type': 'application/json'
    },
    body: payload
  });
  return data;
};

// export const useMovieTrendingById = async (id: number) => {
//   const { data } = await useAPI(`${trendingUrl}/${id}`);
//   return data.value;
// };
