<script lang="ts" setup>
const popular = [
  {
    "value": "popularity.asc",
    "label": "Popularity Ascending",
  },
  {
    "value": "popularity.desc",
    "label": "Popularity Descending",
  },
  {
    "value": "primary_release_date.asc",
    "label": "Release Date Ascending",
  },
  {
    "value": "primary_release_date.desc",
    "label": "Release Date Descending",
  },
  {
    "value": "vote_average.asc",
    "label": "Rating Ascending",
  },
  {
    "value": "vote_average.desc",
    "label": "Rating Descending",
  },
];

type TGenres = {
  id: number;
  name: string;
};

const props = defineProps<{
  genres: TGenres[];
}>();

const emit = defineEmits(["sort", "check"]);

const selectedOption: Ref<string | number> = ref("");
const selectedGenres = ref<any>([]);

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  selectedOption.value = target.value;
  emit("sort", target.value);
};

const handleChangeChecked = (event: Event, genre: string, id: any): void => {
  const target = event.target as HTMLInputElement;
  if (target.checked) {
    if (selectedGenres.value.includes(genre)) {
      selectedGenres.value.splice(id, 1);
    } else {
      selectedGenres.value.push(genre);
    }
  }
  emit("check", id);
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
    <div class="filter-sidebar__genres">Genres</div>
    <div
      v-for="(genre, index) in genres"
      :key="index"
      class="filter-sidebar__genre-list"
    >
      <label>{{ genre.name }}</label>
      <input
        v-model="selectedGenres"
        type="checkbox"
        :value="genre.name"
        :checked="selectedGenres.includes(genre.name)"
        class="checkbox-input"
        @change="handleChangeChecked($event, genre.name, genre.id)"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.filter-sidebar {
  background-image: linear-gradient(90deg, #0e1723, #1e232a);
  width: 240px;
  height: 100%;
  padding-bottom: 1rem;

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

  .filter-sidebar__genres {
    border-bottom: 0.5px solid #ffffff;
    padding: 1rem;
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
  }

  .filter-sidebar__genre-list {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem 0;

    label {
      font-size: 14px;
      font-weight: 400px;
      color: #ffffff;
    }

    .checkbox-input {
      cursor: pointer;
    }
  }
}
</style>