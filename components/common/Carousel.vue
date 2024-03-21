<script lang="ts" setup>
import { getYear } from "~/utils/formatter/dateTime";

type TBanner = {
  image_url: string;
  name: string;
  day: string;
  dateTime: string;
  description: string;
};

type TMovieTrending = {
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
  data: TMovieTrending[];
}>();

const { data } = props;

const index = ref(0);
const timeoutRef: any = ref(null);

const resetTimeout = () => {
  if (timeoutRef.value) {
    clearTimeout(timeoutRef.value);
  }
};

resetTimeout();
timeoutRef.value = setTimeout(() => {
  index.value = index.value === data.length - 1 ? 0 : index.value + 1;
}, 2500);
</script>

<template>
  <div class="trending">
    <div
      class="trending-slider"
      :style="{
        transform: `translate3d(${-(index === 0 ? index : index === 1 ? '85.5' : '175')}%, 0, 0)`,
      }"
    >
      <div class="trending-box">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="trending-box__wrapper"
        >
          <div class="trending-detail">
            <div class="trending-image">
              <img
                :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`"
                alt="avatar"
              />
            </div>
            <div class="trending-content">
              <div class="trending-content__wrapper">
                <div class="trending-rating">
                  <img
                    src="~assets/img/star.svg"
                    alt="star"
                  />
                  {{ parseFloat(item.vote_average.toFixed(1)) }}
                </div>
                <div class="trending-name">
                  {{ item.original_title }}
                </div>
                <div class="trending-flex__content">
                  <div class="trending-date">
                    {{ getYear(item.release_date) }}
                  </div>
                  <div class="poin"><span>•</span></div>
                  <div class="trending-type">
                    {{ item.media_type }}
                  </div>
                </div>
                <div class="trending-description">
                  {{ item.overview }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="trending-dots">
      <div
        v-for="(_, idx) in data"
        :key="idx"
        class="trending-dot"
        :class="index === idx && 'active'"
        @click="
          () => {
            index = idx;
          }
        "
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* trending */
.trending {
  margin: 0 auto;
  overflow: hidden;

  .trending-slider {
    transition: ease 1000ms;
    white-space: nowrap;

    .trending-box__wrapper {
      display: inline-block;
      border-radius: 1rem;
      padding: 1rem;
      margin: 0 5px;

      .trending-detail {
        display: flex;

        .trending-image {
          img {
            width: 243.08px;
            height: 364.61px;
          }
        }

        .trending-content {
          padding: 2rem 0;

          .trending-content__wrapper {
            width: 350px;
            height: 100%;
            background-color: #000000;
            color: #ffffff;
            padding: 1rem;

            .trending-rating {
              display: flex;
              font-size: 18px;
              font-weight: 700;

              img {
                margin-right: 0.5rem;
              }
            }

            .trending-name {
              font-size: 28px;
              font-weight: 700;
              display: flex;
              align-items: center;
            }

            .trending-flex__content {
              display: flex;
              font-size: 12px;

              .trending-date {
                margin-right: 0.5rem;
              }

              .poin {
                span {
                  font-size: 28px;
                  color: #808080;
                  line-height: 0.8;
                }
              }

              .trending-type {
                margin-left: 0.5rem;
              }
            }

            .trending-description {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: normal;
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  /* Buttons */

  .trending-dots {
    text-align: center;
  }

  .trending-dot {
    display: inline-block;
    height: 12px;
    width: 12px;
    border-radius: 50%;

    cursor: pointer;
    margin: 15px 3px 0px;

    background-color: #c4c4c4;
  }

  .trending-dot.active {
    background-color: #f95846;
    width: 5rem;
    border-radius: 2rem;
  }
}
</style>
