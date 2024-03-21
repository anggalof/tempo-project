<script setup lang="ts">
import Navigation from "~/components/common/Navigation.vue";
</script>

<template>
  <main>
    <div class="main-content">
      <Navigation />
      <div class="content-ds">
        <slot />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main-content {
  display: flex;
  flex-flow: column;
  height: 100vh;
}

.content-ds {
  position: relative;
  overflow-y: auto;
  background-color: #1e2329;
}
</style>
