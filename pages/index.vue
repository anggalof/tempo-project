<script lang="ts" setup>
import CarouselSection from "~/components/common/CarouselSection.vue";
import MainSection from "~/components/common/MainSection.vue";
import {
  useAddFavorite,
  useDiscoverMovies,
  useFavoriteMovies,
  useMovieTrending,
  usePopularMovies,
} from "~/composables/useMovies";

const discoverMovies: any = ref([]);
const favoriteMovies: any = ref({});
const isLoadingFav = ref<boolean>(false);

const currentPage = ref<number>(1);

const loadDiscoverData = async () => {
  const data = await useDiscoverMovies(currentPage.value);
  return data;
};

const onLoadFavoriteMovies = async () => {
  const favorite = await useFavoriteMovies();
  favoriteMovies.value = favorite;
  isLoadingFav.value = false;
};

const handleAddFavorite = async (id: number, type: boolean) => {
  isLoadingFav.value = true;
  const payload = {
    media_type: "movie",
    media_id: id,
    favorite: type,
  };
  await useAddFavorite(payload);
  onLoadFavoriteMovies();
};

const handleLoadMore = async () => {
  currentPage.value++;
  const newData: any = await loadDiscoverData();
  const data: any = await newData.results;
  discoverMovies.value = [...discoverMovies.value, ...data];
};

const movieTrends: any = await useMovieTrending();
const popularMovies: any = await usePopularMovies();
const favorite: any = await useFavoriteMovies();
favoriteMovies.value = favorite;
const movies: any = await loadDiscoverData();
discoverMovies.value = movies?.results;
</script>

<template>
  <div>
    <CarouselSection
      v-if="movieTrends"
      :data="movieTrends.results"
    />
    <MainSection
      :discover="discoverMovies"
      :popular="popularMovies.results"
      :favorite="favoriteMovies.results"
      :loading="isLoadingFav"
      @change="handleAddFavorite"
      @load="handleLoadMore"
    />
  </div>
</template>

<style lang="scss" scoped>
.container {
  text-align: center;

  .wrapper {
    font-size: 18px;
  }
}
</style>
