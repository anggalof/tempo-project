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
  data: TMovies[];
  favorite: TMovies[];
  loading: boolean;
}>();

const emit = defineEmits(["change"]);

const hoveredCard: any = ref(null);

const { data } = props;

const onFavorite = (id: any) => {
  return props.favorite.some((item: any) => item.id === id);
};
</script>

<template>
  <div class="movie-list">
    {{ props.favorite }}
    <div>{{ loading ? "true" : "false" }}</div>
    <div class="movie-card">
      <div
        v-for="(item, index) in data"
        :key="item.id"
        class="movie-content"
        @mouseover="hoveredCard = index"
        @mouseleave="hoveredCard = null"
      >
        <img
          :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`"
          :alt="`movie-${item.id}`"
        />
        <div class="movie-title">{{ item.title }}</div>
        <div class="movie-date">{{ getYear(item.release_date) }}</div>
        <div class="movie-rate">{{ formatNumber(item.vote_average) }}</div>
        <div
          v-if="hoveredCard === index"
          class="hover-condition"
        >
          <div class="hover-average">
            <div class="hover-rating">
              <img
                src="~assets/img/star.svg"
                alt="star"
              />
              {{ formatNumber(item.vote_average) }}
            </div>
          </div>
          <div class="hover-text">Action</div>
          <div class="hover-btn__view">VIEW</div>
          <div
            v-if="onFavorite(item.id)"
            class="hover-btn__added"
            @click="emit('change', item.id, false)"
          >
            ADDED
          </div>
          <div
            v-else
            class="hover-btn__add"
            @click="emit('change', item.id, true)"
          >
            <div
              v-if="loading"
              class="loading"
            ></div>
            <span v-else>ADD</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie-list {
  width: 100%;
  padding-left: 2rem;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 2px;
  }

  .movie-card {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 1.5rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-gap: 0.5rem;
    }

    .movie-content {
      position: relative;

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

      .hover-condition {
        background-color: #2e2e2e;
        width: 100%;
        padding: 2rem;
        position: absolute;
        top: 0;
        z-index: 99999;
        cursor: pointer;

        .hover-average {
          display: flex;
          justify-content: center;

          .hover-rating {
            display: flex;
            font-size: 18px;
            font-weight: 700;

            @media (max-width: 768px) {
              font-size: 12px;
            }

            img {
              margin-right: 0.5rem;
              width: 1rem;
            }
          }
        }

        .hover-text {
          margin: 3rem 0;
          font-size: 18px;
          font-weight: 600;
          text-align: center;
        }

        .hover-btn__view {
          background-color: #ff0000;
          color: #ffffff;
          text-align: center;
          border-radius: 2rem;
          padding: 0.5rem 1.5rem;
          margin-top: 1rem;
          font-weight: 700;
        }

        .hover-btn__add {
          border: 1px solid #ffffff;
          color: #ffffff;
          display: flex;
          justify-content: center;
          border-radius: 2rem;
          padding: 0.5rem 1.5rem;
          margin-top: 1rem;
          font-weight: 700;
          position: relative;
        }

        .hover-btn__added {
          border: 1px solid #ffffff;
          background-color: #a9ffc6;
          color: #155129;
          display: flex;
          justify-content: center;
          border-radius: 2rem;
          padding: 0.5rem 1.5rem;
          margin-top: 1rem;
          font-weight: 700;
          position: relative;
        }
      }
    }
  }
}
</style>
