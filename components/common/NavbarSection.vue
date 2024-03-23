<script lang="ts" setup>
import { useSearchMovies } from "~/composables/useMovies";

defineProps({
  name: {
    type: String,
    required: true,
    default: "",
  },
});

const searchMovie = ref<string>("");
const searchResult = ref<any>([]);
const isSearchLoading = ref<boolean>(false);
const isSearchKeyword = ref<boolean>(false);

const handleSearchMovie = async (event: Event) => {
  isSearchLoading.value = true;
  const target = event.target as HTMLInputElement;
  const search: any = await useSearchMovies(target.value);
  if (search) {
    searchResult.value = search.results;
    isSearchLoading.value = false;
  }
  if (target.value !== "") {
    isSearchKeyword.value = true;
  } else {
    isSearchKeyword.value = false;
  }
};

const handleDirect = () => {
  isSearchKeyword.value = false;
};
</script>

<template>
  <div
    class="navbar-collapse"
    :class="name ? name : ''"
  >
    <div class="navbar-search">
      <div class="form-search">
        <img
          src="~assets/img/movie-icon.svg"
          alt="search-icon"
        />
        <img
          src="~assets/img/search-icon.svg"
          alt="search-icon"
        />
        <input
          v-model="searchMovie"
          type="text"
          name="search"
          @input="handleSearchMovie"
          class="form-control form-input"
          placeholder="Find movie"
        />
        <div
          v-if="isSearchKeyword"
          class="navbar-search__results"
        >
          <div
            v-if="isSearchLoading"
            class="navbar-search__process"
          >
            <div class="loading"></div>
          </div>
          <div v-else>
            <div>
              <div
                v-if="searchResult.length > 0"
                class="navbar-search__show"
              >
                <div
                  v-for="item in searchResult"
                  :key="item.id"
                >
                  <NuxtLink
                    :to="`/movie/${item.id}`"
                    @click="handleDirect"
                  >
                    <div class="navbar-search__name">
                      {{ item.name }}
                    </div>
                  </NuxtLink>
                </div>
              </div>
              <div
                v-else
                class="navbar-movie__not-found"
              >
                Movie not found!!!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-menu__title">
        <div class="navbar-menu__categories">
          <img
            src="~assets/img/grid-icon.svg"
            alt="grid-icon"
          />
          CATEGORIES
        </div>
      </div>
      <div class="navbar-menu__title">MOVIES</div>
      <div class="navbar-menu__title">TV SHOWS</div>
      <div class="navbar-menu__title">LOGIN</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar-collapse {
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
}

.navbar-collapse__mobile {
  display: block;
  padding: 10px 4px 10px 6px;
  margin-left: auto;
}

.navbar-search {
  padding: 0 2rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  .form-search {
    position: relative;
    width: 100%;

    img {
      width: 1rem;
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
    }

    img:first-of-type {
      top: 0.6rem;
      left: 0.5rem;
    }

    .form-input {
      text-indent: 20px;
      border-radius: 5px;
      color: #ffffff;
    }

    .form-control {
      display: block;
      width: 100%;
      height: 34px;
      border: 0 !important;
      padding: 8px 12px;
      font-size: 14px;
      background-color: #24282e;
    }

    input::placeholder {
      color: #ffffff;
    }

    .navbar-search__results {
      border-radius: 0 0 1rem 1rem;
      background-color: #000000;
      color: #ffffff;
      position: absolute;
      z-index: 99999;
      width: 100%;

      .navbar-search__process {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
      }

      .navbar-search__show {
        a {
          text-decoration: none;
          color: #ffffff !important;

          .navbar-search__name {
            padding: 0.5rem 1rem;

            cursor: pointer;

            &:hover {
              background-color: #24282e;
            }
          }
        }
      }

      .navbar-movie__not-found {
        padding: 1rem;
        text-align: center;
        font-size: 14px;
      }
    }
  }
}

.navbar-menu {
  display: flex;
  color: #e5e5e5;

  @media (max-width: 768px) {
    display: block;
  }

  .navbar-menu__title {
    font-size: 14px;
    margin: 0 1rem;

    @media (max-width: 768px) {
      margin: 1rem;
    }

    .navbar-menu__categories {
      display: flex;

      img {
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
