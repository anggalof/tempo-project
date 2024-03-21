<script lang="ts" setup>
import { useMovieTrending } from "~/composables/useTrending";
import Carousel from "~/components/common/Carousel.vue";
import data from "~/data/pcs.json";

const movieTrends: any = await useMovieTrending();
console.log("movieTrends", movieTrends.results);
</script>

<template>
  <div>
    <Carousel :data="movieTrends ? movieTrends.results : data.data.news" />
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
