<template>
  <q-toolbar class="bg-brand text-grey-2 shadow-2 q-py-md" elevated style="position: sticky; top: 0; z-index: 10">
    <q-toolbar-title>Election Center</q-toolbar-title>
  </q-toolbar>

  <q-list bordered separator style="" v-for="nav in navLinks" :key="nav.label">
    <q-expansion-item expand-separator :icon="nav.icon" :label="nav.label" :caption="nav.caption"
      class="text-grey-3 bg-brand active-expansion-item">
      <q-card class="bg-milk-brand text-black expansion-item-card shadow-2">
        <q-expansion-item :header-inset-level="0.2" expand-separator :icon="item.icon" :label="item.label" class="q-ba"
          header-class="bg-brand-subnav  text-grey-9" expand-icon="timelin" header-style="font-weight:400;"
          v-for="item in nav.submenu" :key="item.label" :to="item.link">
        </q-expansion-item>

        <!-- <q-expansion-item :header-inset-level="0.2" expand-separator icon="poll" label="Parliamentary Dashboard" class=""
          header-class="bg-milk-green" expand-icon="timeline" header-style="font-weight:400;" >
        </q-expansion-item> -->
      </q-card>
    </q-expansion-item>
  </q-list>
  <q-list bordered>
    <q-expansion-item expand-separator icon="notifications" label="Notifications and Alerts"
      caption="view messages and alerts" expand-icon="none" class="text-grey-3 bg-brand active-expansion-item">
    </q-expansion-item>
  </q-list>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "NavLinks",
  props: {
    navLinks: {
      type: Array,
    },
  },
  setup(props) {
    onMounted(() => {
      const mainExp = document.querySelectorAll(".active-expansion-item");
      const items = document.querySelectorAll(".expansion-item-card");
      items.forEach((item) => {
        item.parentNode.parentNode.onclick = (e) => {
          console.log(item.parentNode.parentNode);
        };
      });

      items.forEach((item) => {
        [...item.children].forEach((child) => {
          child.onclick = (e) => {
            items.forEach((v) =>
              [...v.children].forEach((i) =>
                i.classList.remove(...["active-expand"])
              )
            );

            if (e.currentTarget == child)
              child.classList.add(...["active-expand"]);
          };
        });
      });
    });
  },
});
</script>

<style></style>
