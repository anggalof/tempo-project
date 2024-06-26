<script lang="ts" setup>
import FilterSidebarSection from "~/components/common/FilterSidebarSection.vue";
import MovieListSection from "~/components/common/MovieListSection.vue";

type TMovies = {
  id: number;
  media_type: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: any;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: any;
  poster_path: string;
  release_date: string;
  title: string;
  video: string;
  vote_average: any;
  vote_rate: number;
};

type TGenres = {
  id: number;
  name: string;
};

const props = defineProps<{
  discover: TMovies[];
  favorite: TMovies[];
  loading: boolean;
  genres: TGenres[];
  show: boolean;
}>();

const emit = defineEmits<{
  (e: "change", id: number, type: boolean): void;
  (e: "load"): void;
  (e: "sort", sort: string): void;
  (e: "error", index: number): void;
  (e: "check", id: any): void;
}>();

const changeFavorite = (id: number, type: boolean) => {
  emit("change", id, type);
};

const loadMore = () => {
  emit("load");
};

const sortBy = (sort: string) => {
  emit("sort", sort);
};

const onImageError = (e: any) => {
  emit("error", e);
};

const checkBox = (id: any) => {
  emit("check", id);
};
</script>

<template>
  <div class="main-section">
    <div class="container">
      <div class="main-header">
        <div class="main-discover">Discover Movies</div>
        <div class="main-info">
          <div class="main-title">My Movies</div>
          <div class="main-total">
            <span>{{ props.discover?.length }}</span>
            movies
          </div>
        </div>
      </div>
      <div class="main-filter">
        <FilterSidebarSection
          :genres="props.genres"
          @sort="sortBy"
          @check="checkBox"
        />
        <MovieListSection
          :discover="props.discover"
          :favorite="props.favorite"
          :loading="loading"
          :show="show"
          @change="changeFavorite"
          @load="loadMore"
          @error="onImageError"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-section {
  background-color: #292e36;
  padding: 4rem 0;

  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;

    .main-discover {
      font-size: 24px;
      font-weight: 700;
    }

    .main-info {
      display: flex;

      @media (max-width: 768px) {
        display: block;
      }

      .main-title {
        font-size: 14px;
        font-weight: 500;
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
          display: block;
          text-align: center;
          font-size: 12px;
        }
      }

      .main-total {
        background-color: #21252a;
        margin-left: 1rem;
        text-align: center;
        border-radius: 2rem;
        font-size: 13px;
        font-weight: 400;
        padding: 0.3rem 1rem;

        @media (max-width: 768px) {
          font-size: 12px;
          margin-left: 0;
        }

        span {
          font-size: 14px;
          font-weight: 500;
          margin-right: 5px;

          @media (max-width: 768px) {
            font-size: 12px;
            margin-right: 0px;
          }
        }
      }
    }
  }

  .main-filter {
    display: flex;
    margin: 4rem 0;

    @media (max-width: 768px) {
      display: block;
      margin: 2rem 0;
    }
  }
}
</style>
