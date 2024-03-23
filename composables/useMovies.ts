const trendingUrl = "/api/trending/movie/week?page=1&per_page=3";
const discoverUrl = "/api/discover/movie";
const favoriteUrl = "/api/account/8244407/favorite";
const movieUrl = "/api/movie";
const genres = "/api/genre/movie/list";

export const useMovieTrending = async () => {
  const { data } = await useAPI(trendingUrl);
  return data.value;
};

export const useDiscoverMovies = async (page: number, sort: string = '', genre: string = '') => {
  const { data } = await useAPI(`${discoverUrl}?page=${page}&sort_by=${sort}&with_genres=${genre}`);
  return data.value;
};

export const usePopularMovies = async () => {
  const { data } = await useAPI(`${movieUrl}/popular`);
  return data.value;
};

export const useFavoriteMovies = async () => {
  const { data } = await useAPI(`${favoriteUrl}/movies`);
  return data.value;
};

export const useGenres = async () => {
  const { data } = await useAPI(genres);
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

export const useMovieById = async (id: number) => {
  const { data } = await useAPI(`${movieUrl}/${id}`);
  return data.value;
};

export const useMovieReview = async (id: number) => {
  const { data } = await useAPI(`${movieUrl}/${id}/reviews`);
  return data.value;
}

export const useMovieRecommendation = async (id: number) => {
  const { data } = await useAPI(`${movieUrl}/${id}/recommendations`);
  return data.value;
}
