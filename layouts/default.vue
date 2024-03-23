<script setup lang="ts">
import NavigationSection from "~/components/common/NavigationSection.vue";
import FooterSection from "~/components/common/FooterSection.vue";
</script>

<template>
  <main>
    <div class="main-content">
      <NavigationSection />
      <div class="content-ds">
        <slot />
      </div>
      <FooterSection />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main-content {
  display: flex;
  flex-flow: column;
}

.content-ds {
  position: relative;
  overflow-y: auto;
  background-color: #1e2329;
}
</style>
