<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
    default: "",
  },
});
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
          type="text"
          name="search"
          class="form-control form-input"
          placeholder="Find movie"
        />
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
      <!-- <Profile size="dekstop" /> -->
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
