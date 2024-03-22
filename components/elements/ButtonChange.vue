<script lang="ts" setup>
defineProps({
  setclass: {
    type: String,
    required: true,
    default: "",
  },
  id: {
    type: Number,
    required: true,
  },
  type: {
    type: Boolean,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
    default: "",
  },
});

const emit = defineEmits(["change"]);
</script>

<template>
  <div>
    <div
      :class="setclass"
      @click="emit('change', id, type)"
    >
      <div
        v-if="loading"
        class="loading"
      ></div>
      <span v-else>{{ name }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hover-btn__add {
  border: 1px solid #ffffff;
  color: #ffffff;
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  font-weight: 700;
  position: relative;
}

.hover-btn__added {
  border: 1px solid #ffffff;
  background-color: #a9ffc6;
  color: #155129;
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  font-weight: 700;
  position: relative;
}
</style>
