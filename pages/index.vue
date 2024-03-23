<script lang="ts" setup>
import CarouselSection from "~/components/common/CarouselSection.vue";
import MainSection from "~/components/common/MainSection.vue";
import localImagePath from "~/assets/img/image-not-found.jpg";
import {
  useAddFavorite,
  useDiscoverMovies,
  useFavoriteMovies,
  useMovieTrending,
  useGenres,
} from "~/composables/useMovies";

const discoverMovies: any = ref([]);
const favoriteMovies: any = ref({});
const isLoadingFav = ref<boolean>(false);
const currentPage = ref<number>(1);
const isSort = ref<string>("");
const isGenre = ref<string>("");
const isShowLoadMore = ref<boolean>(true);

const loadDiscoverData = async (sort: string, genre: string) => {
  const data = await useDiscoverMovies(currentPage.value, sort, genre);
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
  const newData: any = await loadDiscoverData(isSort.value, isGenre.value);
  const data: any = await newData.results;
  discoverMovies.value = [...discoverMovies.value, ...data];

  if (newData.page === newData.total_pages) {
    isShowLoadMore.value = false;
  } else {
    isShowLoadMore.value = true;
  }
};

const handleChangeSort = async (sort: string) => {
  isSort.value = sort;
  const newData: any = await loadDiscoverData(sort, isGenre.value);
  const data: any = await newData.results;
  discoverMovies.value = data;
};

const handleImageError = (e: any) => {
  e.target.src = localImagePath;
};

const handleChangeChecked = async (id: any) => {
  if (isGenre.value === "") {
    isGenre.value = id.toString();
  } else if (isGenre.value.includes(id)) {
    const strGenre = isGenre.value.split(",");
    const index = strGenre.indexOf(id.toString());
    strGenre.splice(index, 1);
    isGenre.value = strGenre.join(",");
  } else {
    isGenre.value = `${isGenre.value},${id}`;
  }
  const newData: any = await loadDiscoverData(isSort.value, isGenre.value);
  const data: any = await newData.results;
  discoverMovies.value = data;

  if (newData.page === newData.total_pages) {
    isShowLoadMore.value = false;
  } else {
    isShowLoadMore.value = true;
  }
};

const movieTrends: any = await useMovieTrending();
const favorite: any = await useFavoriteMovies();
const genreList: any = await useGenres();
favoriteMovies.value = favorite;
const movies: any = await loadDiscoverData(isSort.value, isGenre.value);
discoverMovies.value = movies?.results;
</script>

<template>
  <div>
    <CarouselSection
      v-if="movieTrends"
      :data="movieTrends.results"
    />
    {{ isShowLoadMore }}
    <MainSection
      :discover="discoverMovies"
      :favorite="favoriteMovies.results"
      :genres="genreList.genres"
      :loading="isLoadingFav"
      :show="isShowLoadMore"
      @check="handleChangeChecked"
      @sort="handleChangeSort"
      @change="handleAddFavorite"
      @load="handleLoadMore"
      @error="handleImageError"
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
