<script lang="ts" setup>
const popular = [
  {
    "value": "Popularity Ascending",
    "label": "Popularity Ascending",
  },
  {
    "value": "Popularity Descending",
    "label": "Popularity Descending",
  },
  {
    "value": "Release Date Ascending",
    "label": "Release Date Ascending",
  },
  {
    "value": "Release Date Descending",
    "label": "Release Date Descending",
  },
  {
    "value": "Rating Ascending",
    "label": "Rating Ascending",
  },
  {
    "value": "Rating Descending",
    "label": "Rating Descending",
  },
];

const selectedOption: Ref<string | number> = ref("");

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  selectedOption.value = target.value;
};
</script>

<template>
  <div class="filter-sidebar">
    <div class="filter-sidebar__header">Sort Result By</div>
    <div class="filter-popularity">
      <select
        v-model="selectedOption"
        @change="handleChange"
      >
        <option
          value=""
          disabled
          selected
        >
          Popularity
        </option>
        <option
          v-for="(option, index) in popular"
          :key="index"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
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

  .filter-popularity {
    border-top: 0.3px solid #ffffff;
    border-bottom: 0.3px solid #ffffff;
    padding: 1rem 0.5rem;

    select {
      padding: 0.5rem;
      font-size: 1rem;
      border-radius: 4px;
      background-color: #2f363f;
      color: #fff;
    }
  }
}
</style>