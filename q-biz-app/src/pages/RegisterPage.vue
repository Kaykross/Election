<template>
  <!-- class = "login-form-container" -->
  <div class="row my-form-container">
    <div class="bg-brand col-3"></div>
    <div class="bg-milk-green col-9">
      <registration-form></registration-form>
    </div>
  </div>
</template>

<script>
import RegisterUser from "src/components/RegisterUser.vue";
export default {
  name: "LoginPage",
  components: {
    "registration-form": RegisterUser,
  },
};
</script>

<style scoped></style>
