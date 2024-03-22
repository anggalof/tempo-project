<template>
  <div class="filter-sidebar">
    <div class="filter-sidebar__header">Sort Result By</div>
  </div>
</template>
<style lang="scss" scoped>
.filter-sidebar {
  background-image: linear-gradient(90deg, #0e1723, #1e232a);
  width: 240px;
  height: 586px;

  @media (max-width: 768px) {
    display: none;
  }

  .filter-sidebar__header {
    padding: 1rem;
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
  }
}
</style>