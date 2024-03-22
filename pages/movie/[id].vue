<script lang="ts" setup>
import movieReviews from "~/data/movie.json";
import { useMovieById, useMovieReview, useMovieRecommendation } from "~/composables/useMovies";
import { getYear } from "~/utils/formatter/dateTime";
import { formatNumber } from "~/utils/formatter/formatNumber";
import MovieReview from "~/components/common/MovieReview.vue";
import MovieRecommendation from "~/components/common/MovieRecommendation.vue";

const route = useRoute();
const movieId: any = route.params.id;
const element: any = ref(null);
const positionBottom = ref("");
const positionLeft = ref("");
const targetHeight = ref("");

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const handleResize = () => {
  const widthDetail = element.value.offsetWidth;
  if (widthDetail > 1378) {
    positionBottom.value = "-164px";
    targetHeight.value = "5.5rem";
  } else if (widthDetail <= 1378 && widthDetail >= 1178) {
    positionBottom.value = "-192px";
  } else if (widthDetail < 1178 && widthDetail > 768) {
    positionLeft.value = "5%";
  } else {
    positionLeft.value = "auto";
  }
};

const movie: any = await useMovieById(movieId);
const reviews: any = await useMovieReview(movieId);
const recommendation: any = await useMovieRecommendation(movieId);
const show5recommendation: any = recommendation.results.slice(0, 5);
let show2review: any = [];
if (reviews.results.length > 0) {
  show2review = reviews.results.slice(0, 2);
} else {
  show2review = movieReviews.reviews.slice(0, 2);
}
</script>
<template>
  <div
    v-if="movie"
    ref="element"
    class="movie-detail"
  >
    <div
      class="movie-detail__header"
      :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}` }"
    >
      <div class="movie-detail__opacity"></div>
      <div class="movie-detail__block"></div>
      <div
        class="movie-detail__wrapper"
        :style="{ bottom: positionBottom, left: positionLeft }"
      >
        <div class="movie-detail__information">
          <div class="movie-detail__image">
            <NuxtImg
              :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
              loading="lazy"
            />
          </div>
          <div class="movie-detail__more">
            <div class="movie-detail__section-header">
              <div class="movie-detail__date">
                {{ getYear(movie.release_date) }}
              </div>
              <div class="movie-detail__title">
                {{ movie.title }}
              </div>
              <div class="movie-detail__genre">
                <div
                  v-for="(item, index) in movie.genres"
                  :key="item.id"
                >
                  {{ item.name }}
                  <span v-if="index < movie.genres.length - 1">,</span>
                </div>
              </div>
            </div>
            <div class="movie-detail__complete">
              <div class="movie-detail__rating">
                <img
                  src="~assets/img/star.svg"
                  alt="star"
                />
                {{ formatNumber(movie.vote_average) }}
              </div>
              <div class="movie-detail__more-info">
                <div class="movie-detail__more-top">USER SCORE</div>
                <div class="movie-detail__more-bottom">{{ movie.vote_count }} VOTES</div>
              </div>
              <div class="line-height"></div>
              <div class="movie-detail__more-info">
                <div class="movie-detail__more-top">STATUS</div>
                <div class="movie-detail__more-bottom">{{ movie.status }}</div>
              </div>
              <div class="line-height"></div>
              <div class="movie-detail__more-info">
                <div class="movie-detail__more-top">LANGUAGE</div>
                <div class="movie-detail__more-bottom">
                  {{ movie.spoken_languages[0].name }} VOTES
                </div>
              </div>
              <div class="line-height"></div>
              <div class="movie-detail__more-info">
                <div class="movie-detail__more-top">BUDGET</div>
                <div class="movie-detail__more-bottom">${{ movie.budget }}</div>
              </div>
              <div class="line-height"></div>
              <div class="movie-detail__more-info">
                <div class="movie-detail__more-top">PRODUCTION</div>
                <div class="movie-detail__more-bottom">
                  {{ movie.production_companies[0].name }}
                </div>
              </div>
            </div>
            <div class="movie-detail__overview">OVERVIEW</div>
            <div
              class="movie-detail__description"
              :style="{ height: targetHeight }"
            >
              {{ movie.overview }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="movie-detail__reviews">
      <div class="container">
        <div class="movie-detail__review-title">REVIEWS</div>
        <div class="movie-detail__review-wrapper">
          <MovieReview
            v-for="item in show2review"
            :key="item.id"
            :author="item.author"
            :rating="item.author_details.rating"
            :date="item.created_at"
            :content="item.content"
          />
        </div>
      </div>
    </div>

    <MovieRecommendation :recommendation="show5recommendation" />
  </div>
</template>
<style lang="scss" scoped>
.movie-detail {
  margin: 0;

  .movie-detail__header {
    width: 100%;
    height: 20rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;

    .movie-detail__opacity {
      position: absolute;
      width: 100%;
      height: 20rem;
      top: 0;
      opacity: 0.5;
      background-color: rgba(0, 0, 0, 1);
    }

    .movie-detail__block {
      position: absolute;
      width: 100%;
      height: 4.2rem;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
    }

    .movie-detail__wrapper {
      position: absolute;
      bottom: -192px;
      left: 10%;
      opacity: 1;

      @media (max-width: 768px) {
        top: 50px;
        width: 100%;
        left: auto;
        bottom: auto;
      }

      .movie-detail__information {
        display: flex;

        @media (max-width: 768px) {
          display: block;
        }

        .movie-detail__image {
          img {
            width: 220px;
            height: 330px;

            @media (max-width: 768px) {
              display: flex;
              margin-left: auto;
              margin-right: auto;
            }
          }
        }

        .movie-detail__more {
          padding: 1rem 1.5rem;

          .movie-detail__section-header {
            color: #ffffff;

            @media (max-width: 768px) {
              color: #000000;
            }

            .movie-detail__date {
              font-size: 16px;
              font-weight: 500;
            }

            .movie-detail__title {
              font-size: 38px;
              font-weight: 700;
            }

            .movie-detail__genre {
              display: flex;
              font-size: 12px;
              font-weight: 500;

              span {
                margin-right: 0.2rem;
              }
            }
          }

          .movie-detail__complete {
            display: flex;
            padding: 2rem 0;

            @media (max-width: 768px) {
              display: block;
              padding: 0 0 1rem;
            }

            .movie-detail__rating {
              display: flex;
              align-items: center;
              color: #ffffff;
              font-size: 32px;
              margin-right: 1rem;

              @media (max-width: 768px) {
                color: #000000;
              }

              img {
                width: 2rem;
                height: 2rem;
                margin-right: 0.5rem;
              }
            }

            .movie-detail__more-info {
              font-size: 14px;

              .movie-detail__more-top {
                color: #91938f;
              }
              .movie-detail__more-bottom {
                color: #ffffff;
                text-transform: uppercase;

                @media (max-width: 768px) {
                  color: #000000;
                }
              }
            }

            .line-height {
              width: 1px;
              height: 2rem;
              background: #ffffff;
              margin: 5px 1.5rem;
              opacity: 0.5;

              @media (max-width: 768px) {
                width: 2px;
                height: 1rem;
              }
            }
          }

          .movie-detail__overview {
            color: #ff0000;
            font-size: 18px;
            font-weight: 700;
          }

          .movie-detail__description {
            width: 60%;
            margin-top: 0.5rem;
            font-size: 14px;
            font-weight: 400;
            line-height: 28px;
            height: 7rem;

            @media (max-width: 768px) {
              width: 100%;
            }
          }
        }
      }
    }
  }

  .movie-detail__reviews {
    padding-top: 14rem;
    padding-bottom: 4rem;
    background-color: #ffffff;

    @media (max-width: 768px) {
      padding-top: 50rem;
    }

    .movie-detail__review-title {
      color: #ff0000;
      font-size: 18px;
      font-weight: 700;
    }

    .movie-detail__review-wrapper {
      display: flex;
      margin: 2rem 0;
    }
  }
}
</style>
