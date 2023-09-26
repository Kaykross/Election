<template>
  <div class="app-container">
    <nav class="nav-container" ref="leftDrawer" show-if-above bordered>
      <nav-links :navLinks="navLinks" />
    </nav>
    <main class="main-container" ref="mainContainer">
      <header
        elevated
        class="bg-black text-white"
        style="width: 100% !important; margin: 0"
      >
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title> Quasar App </q-toolbar-title>

          <div>Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </header>
      <router-view />
    </main>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import NavLinks from "components/NavLinks.vue";
import { navLinks } from "../data/navlinks";

export default defineComponent({
  name: "AppLayout",
  components: {
    "nav-links": NavLinks,
  },
  setup() {
    const leftDrawer = ref(false);
    const mainContainer = ref(false);

    return {
      leftDrawer,
      mainContainer,
      navLinks,
      toggleLeftDrawer() {
        leftDrawer.value.classList.toggle("toggleLeftDrawer");
        mainContainer.value.classList.toggle("toggleMainPage");
        console.log(leftDrawer.value.classList);
        // leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss"></style>
