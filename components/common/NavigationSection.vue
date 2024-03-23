<script lang="ts" setup>
import NavbarSection from "~/components/common/NavbarSection.vue";

const router = useRouter();
const isOpen = ref(false);
const searchMovie = ref<string>("");

const handleToggle = () => {
  isOpen.value = true;
};

const handleCloseModal = () => {
  isOpen.value = false;
};

const handleDirect = () => {
  return router.push("/");
};
</script>

<template>
  <div class="navbar">
    <div class="container navbar-content">
      <div
        class="navbar-logo"
        @click="handleDirect"
      >
        <img
          src="~assets/img/moovietime-logo.svg"
          alt="logo"
        />
      </div>

      <NavbarSection name="navbar-collapse" />

      <div
        class="navbar-toggle"
        @click="handleToggle"
      >
        <svg
          class="icon-toggle"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H3zm0 5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H3zm0 5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H3z"
          />
        </svg>
      </div>
    </div>
    <div
      class="navbar-toggle__open"
      :class="isOpen ? 'block' : 'hidden'"
    >
      <div
        :class="isOpen && 'overlay'"
        @click="handleCloseModal"
      ></div>
      <div class="navbar-sidebar">
        <NavbarSection name="navbar-collapse__mobile" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: #292e36;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: center;
  }

  .navbar-content {
    display: flex;
    align-items: center;
    padding: 6px;

    @media (max-width: 768px) {
      width: 100%;
    }

    .navbar-logo {
      cursor: pointer;
      display: flex;

      img {
        width: 6rem;
        margin: 0 1rem;

        @media (max-width: 768px) {
          margin: 0;
        }
      }
    }

    .navbar-toggle {
      margin-left: auto;
      padding: 2px;
      color: #e5e5e5;
      display: none;

      @media (max-width: 768px) {
        display: flex;
        background-color: #292e36;
      }

      .icon-toggle {
        fill: currentColor;
        width: 2rem;
        height: 2rem;
      }
    }
  }

  .navbar-toggle__open {
    display: none;

    @media (max-width: 768px) {
      border-right: 1px solid #c2cfd6;
      padding: 0;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    .navbar-sidebar {
      background-color: #292e36;
      z-index: 99999;
      height: 100vh;
      position: fixed;
      right: 0;
      top: 0;
      overflow-y: auto;
    }
  }
}
</style>
