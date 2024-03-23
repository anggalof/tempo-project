<script lang="ts" setup>
const getYear = () => {
  return new Date().getFullYear();
};
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-copyright">
          Copyright &copy; {{ getYear() }} MoovieTime. All rights reserved.
        </div>
        <div class="footer-logo">
          <img
            src="~assets/img/moovietime-logo.svg"
            alt="logo"
          />
        </div>
        <div class="footer-made">Made with Nuxt 3 + Vue 3 + Typescript</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #15191e;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-content {
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    opacity: 0.5;

    @media (max-width: 768px) {
      display: block;
    }

    .footer-copyright {
      font-weight: 400;
      font-size: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .footer-logo {
      display: flex;
      justify-content: center;

      img {
        width: 5rem;
        height: 5rem;
      }
    }

    .footer-made {
      font-weight: 400;
      font-size: 13px;
      justify-content: center;
      display: flex;
      align-items: center;
    }
  }
}
</style>
