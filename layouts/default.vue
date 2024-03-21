<script setup lang="ts">
</script>

<template>
  <main>
    <div class="main-content">
      <!-- header -->
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
  width: calc(100% - 240px);
  height: 100vh;
}

.content-ds {
  position: relative;
  height: calc(100vh - 92px);
  padding: 2rem;
  overflow-y: auto;
  background-color: #f5f5f5;
}
</style>
