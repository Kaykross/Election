<template>
  <!-- class = "login-form-container" -->
  <div class="row my-form-container">
    <div class="bg-brand col-3"></div>
    <div class="bg-milk-green col-9">
      <login-form></login-form>
    </div>
  </div>
</template>

<script>
import LoginUser from "src/components/LoginUser.vue";
export default {
  name: "LoginPage",
  components: {
    "login-form": LoginUser,
  },
};
</script>

<style scoped></style>
