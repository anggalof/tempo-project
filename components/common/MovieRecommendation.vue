<script lang="ts" setup>
import { getYear } from "~/utils/formatter/dateTime";
import { formatNumber } from "~/utils/formatter/formatNumber";

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

const props = defineProps<{
  recommendation: TMovies[];
}>();
</script>
<template>
  <div class="movie-list">
    <div class="container">
      <div class="movie-section__title">RECOMMENDATION MOVIES</div>
      <div class="movie-card">
        <div
          v-for="item in props.recommendation"
          :key="item.id"
          class="movie-content"
        >
          <NuxtLink :to="`/movie/${item.id}`">
            <NuxtImg
              :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`"
              :alt="`movie-${item.id}`"
              loading="lazy"
            />
            <div class="movie-title">{{ item.title }}</div>
            <div class="movie-date">{{ getYear(item.release_date) }}</div>
            <div class="movie-rate">{{ formatNumber(item.vote_average) }}</div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie-list {
  width: 100%;
  padding: 2rem;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 2px;
  }

  .movie-section__title {
    font-size: 14px;
    font-weight: 600;
    margin: 2rem 0;
  }

  .movie-card {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 1.5rem;
    cursor: pointer;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-gap: 0.5rem;
    }

    .movie-content {
      position: relative;

      a {
        text-decoration: none;
        color: #ffffff;

        img {
          width: 100%;
        }

        .movie-title {
          padding: 0.5rem 0 0.1rem;
          font-size: 16px;
          font-weight: 700;
        }

        .movie-date {
          font-size: 14px;
          font-weight: 400;
          color: #929292;
        }

        .movie-rate {
          position: absolute;
          background-color: #1e232b;
          opacity: 1;
          padding: 4px 8px;
          text-align: center;
          font-size: 18px;
          font-weight: 700;
          top: 0;
          right: 0;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
