<script lang="ts" setup>
import CarouselSection from "~/components/common/CarouselSection.vue";
import MainSection from "~/components/common/MainSection.vue";
import {
  useMovieTrending,
  useDiscoverMovies,
  useAddFavorite,
  useFavoriteMovies,
} from "~/composables/useMovies";

const movieTrends: any = await useMovieTrending();
const discoverMovies: any = await useDiscoverMovies();
const favorite: any = await useFavoriteMovies();
const favoriteMovies: any = ref({});
const isLoadingFav: any = ref(false);
favoriteMovies.value = favorite;

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
  const success: any = await useAddFavorite(payload);
  onLoadFavoriteMovies();
};
</script>

<template>
  <div>
    <CarouselSection
      v-if="movieTrends"
      :data="movieTrends.results"
    />
    <MainSection
      v-if="discoverMovies"
      :data="discoverMovies.results"
      :favorite="favoriteMovies.results"
      :loading="isLoadingFav"
      @change="handleAddFavorite"
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
