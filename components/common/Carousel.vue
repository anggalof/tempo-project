<script lang="ts" setup>
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
  <div class="slideshow">
    <div
      class="slideshow-slider"
      :style="{
        transform: `translate3d(${-(index === 0 ? index : index === 1 ? '85.5' : '175')}%, 0, 0)`,
      }"
    >
      <div class="news-box">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="news-box__wrapper"
        >
          <div class="news-detail__wrapper">
            <div class="news-detail">
              <div class="news-image">
                <img
                  :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`"
                  alt="avatar"
                />
              </div>
              <div class="news-name">
                {{ item.original_title }}
              </div>
            </div>
            <div class="news-detail__date">
              <div class="news-detail__date-day">
                {{ item.media_type }}
              </div>
              <div class="news-detail__date-time">
                {{ item.release_date }}
              </div>
            </div>
          </div>
          <div class="news-detail__description">
            {{ item.overview }}
          </div>
        </div>
      </div>
    </div>

    <div class="slideshow-dots">
      <div
        v-for="(_, idx) in data"
        :key="idx"
        class="slideshow-dot"
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
/* Slideshow */
.slideshow {
  margin: 0 auto;
  overflow: hidden;
  max-width: 500px;

  .slideshow-slider {
    transition: ease 1000ms;
    white-space: nowrap;

    .news-box__wrapper {
      display: inline-block;
      border-radius: 1rem;
      padding: 1rem;
      box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12);
      margin: 0 5px;
      width: 80%;
      height: 150%;

      .news-detail__wrapper {
        display: flex;
        justify-content: space-between;

        .news-detail {
          display: flex;
          justify-content: space-between;

          .news-image {
            img {
              border-radius: 50%;
              width: 2rem;
              height: 2rem;
            }
          }

          .news-name {
            font-family: "SVN-Gilroy-Bold", sans-serif;
            font-size: 14px;
            color: #f95846;
            display: flex;
            align-items: center;
            margin-left: 0.5rem;
          }
        }

        .news-detail__date {
          text-align: right;

          .news-detail__date-day {
            font-size: 12px;
            color: #000000;
          }
          .news-detail__date-time {
            color: #000000;
            font-size: 12px;
          }
        }
      }

      .news-detail__description {
        color: #000000;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        margin-top: 1rem;
        font-size: 14px;
      }
    }
  }

  /* Buttons */

  .slideshow-dots {
    text-align: center;
  }

  .slideshow-dot {
    display: inline-block;
    height: 12px;
    width: 12px;
    border-radius: 50%;

    cursor: pointer;
    margin: 15px 3px 0px;

    background-color: #c4c4c4;
  }

  .slideshow-dot.active {
    background-color: #f95846;
    width: 5rem;
    border-radius: 2rem;
  }
}
</style>
