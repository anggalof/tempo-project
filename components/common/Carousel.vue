<script lang="ts" setup>
import { getYear } from "~/utils/formatter/dateTime";

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
const show4 = data.slice(0, 4);

const index = ref(1);
const timeoutRef: any = ref(null);
const translateValue = ref(0);
const element: any = ref(null);

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const handleClick = (idx: any) => {
  index.value = idx;
  handleResize();
};

const handleResize = () => {
  const sliderWidth = element.value.offsetWidth;
  if (sliderWidth > 1348) {
    if (index.value === 0) {
      translateValue.value = -sliderWidth / 1125;
    } else if (index.value === 1) {
      translateValue.value = -sliderWidth / 10;
    } else if (index.value === 2) {
      translateValue.value = -sliderWidth / 2.5;
    } else {
      translateValue.value = -sliderWidth / 1.95;
    }
  } else if (sliderWidth > 1000 && sliderWidth < 1348) {
    if (index.value === 0) {
      translateValue.value = -sliderWidth / 825;
    } else if (index.value === 1) {
      translateValue.value = -sliderWidth / 4;
    } else if (index.value === 2) {
      translateValue.value = -sliderWidth / 1.3;
    } else {
      translateValue.value = -sliderWidth / 1;
    }
  } else if (sliderWidth < 1000 && sliderWidth > 700) {
    if (index.value === 0) {
      translateValue.value = -sliderWidth / 425;
    } else if (index.value === 1) {
      translateValue.value = -sliderWidth / 2.6;
    } else if (index.value === 2) {
      translateValue.value = -sliderWidth / 1.1;
    } else {
      translateValue.value = -sliderWidth / 0.8;
    }
  } else {
    if (index.value === 0) {
      translateValue.value = -sliderWidth / 225;
    } else if (index.value === 1) {
      translateValue.value = -sliderWidth / 1;
    } else if (index.value === 2) {
      translateValue.value = -sliderWidth / 0.5;
    } else {
      translateValue.value = -sliderWidth / 0.32;
    }
  }
};

const resetTimeout = () => {
  if (timeoutRef.value) {
    clearTimeout(timeoutRef.value);
  }
};

resetTimeout();
</script>

<template>
  <div
    class="trending"
    ref="element"
  >
    <div
      class="trending-slider"
      :style="{ transform: `translate3d(${translateValue}px, 0, 0)` }"
    >
      <div class="trending-box">
        <div
          v-for="(item, dx) in show4"
          :key="dx"
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
        v-for="(_, idx) in show4"
        :key="idx"
        class="trending-dot"
        :class="index === idx && 'active'"
        @click="() => handleClick(idx)"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* trending */
.trending {
  margin: 0 auto;
  overflow: hidden;
  padding: 3rem 0;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }

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

            @media (max-width: 768px) {
              width: 132.08px;
              height: 100%;
            }
          }
        }

        .trending-content {
          padding: 2rem 0;

          @media (max-width: 768px) {
            padding: 0.8rem 0;
          }

          .trending-content__wrapper {
            width: 350px;
            height: 100%;
            background-color: #000000;
            color: #ffffff;
            padding: 1rem;

            @media (max-width: 768px) {
              width: 260px;
              padding: 0.5rem;
            }

            .trending-rating {
              display: flex;
              font-size: 18px;
              font-weight: 700;

              @media (max-width: 768px) {
                font-size: 12px;
              }

              img {
                margin-right: 0.5rem;
              }
            }

            .trending-name {
              font-size: 28px;
              font-weight: 700;
              display: flex;
              align-items: center;

              @media (max-width: 768px) {
                font-size: 16px;
              }
            }

            .trending-flex__content {
              display: flex;
              font-size: 12px;

              @media (max-width: 768px) {
                font-size: 10px;
              }

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
              -webkit-line-clamp: 7;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: normal;
              font-size: 14px;

              @media (max-width: 768px) {
                -webkit-line-clamp: 4;
              }
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

    @media (max-width: 768px) {
      height: 8px;
      width: 8px;
    }
  }

  .active {
    background-color: #f95846;
    width: 5rem;
    border-radius: 2rem;

    @media (max-width: 768px) {
      width: 2rem;
    }
  }
}
</style>
