<template>
  <div class="result">
    <section class="regional-stats q-pa-md">
      <div class="bg-brand text-white text-center q-mb-sm q-pa-sm text-bold">
        Click on a Region to view constituency distribution
      </div>

      <section class="q-pa-sm q-ma-sm row bg-grey-4"
        style="border-left: 3px solid purple; border-right: 3px solid purple">
        <div class="col-5">
          <div>Total Regions :</div>
          <div class="text-purple text-center" style="font-size: 4vh">
            {{ all_regions.length }}
          </div>
        </div>
        <div class="col-7">
          <q-input v-model="selectedRegion" type="text" label="Search Region" outlined />
        </div>
      </section>

      <div class="row q-col-gutter-xs">
        <div class="col-xs-6 col-sm-4 col-md-3" v-for="region in _regions()" :key="region.region"
          @click="router.push(region.link)">
          <q-card class="bg-brand q-pa-md text-center" style="height: 100% !important">
            <div class="stats text-white text-weight-bold" style="font-size: 20px">
              {{ region.region }}
            </div>
            <div class="text-grey-5" style="text-transform: capitalize">
              <q-icon name="place" />
              {{ region.capital }}
            </div>
            <div class="text-grey-6" style="text-transform: capitalize">
              <q-icon name="assistant_photo" />
              {{ region.results.length }}
            </div>
          </q-card>
        </div>
      </div>
    </section>
    <section class="map q-pa-md">
      <div class="row q-col-gutter-md" style="overflow: auto">
        <div class="col row">
          <q-badge color="green" text-color="white" class="col row">
            <div class="col">NDC</div>
            <div>
              <strong class="col"> {{ counts.ndc.count }} </strong>
              <span> Regions Won</span>
            </div>
          </q-badge>
        </div>
        <div class="col row">
          <q-badge color="navy" text-color="white" class="col row">
            <div class="col">NPP</div>
            <div>
              <strong class="col"> {{ counts.npp.count }} </strong>
              <span> Regions Won</span>
            </div>
          </q-badge>
        </div>
        <div class="col row">
          <q-badge color="grey" text-color="white" class="col row">
            <div class="col">Others</div>
            <div>
              <strong class="col"> {{ counts.others.count }} </strong>
              <span> Regions Won</span>
            </div>
          </q-badge>
        </div>
      </div>
      <heat_map class="bg-milk-green"></heat_map>
    </section>



    <section class="regional-stats q-pa-md">
      <div class="bg-brand text-white text-center q-my-sm q-pa-sm text-bold">
        GENERAL REGIONAL AND NATIONAL STATISTICS
      </div>
      <div class="row q-col-gutter-xs">
        <div class="col-xs-6 col-sm-4 col-md-3" v-for="stat in stats" :key="stat.stat">
          <q-card class="bg-brand q-pa-md text-center" style="height: 100% !important">
            <div class="stats text-white text-weight-bold" style="font-size: 25px">
              {{ stat.value }}
            </div>
            <div class="text-grey-6" style="text-transform: capitalize">
              {{ stat.label }}
            </div>
          </q-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onUpdated, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import heat_map from "../Maps/regions_map.vue";
import { _2020 } from "../../data/stats/2020";
import { all_regions } from "../../data/constituency results/allRegions";
const { candidates, fn_map_object, ResultsByRegions, stats } = _2020;
const router = useRouter();
const selectedRegion = ref('');
const _regions = () => all_regions.filter(i => i.region.toLowerCase().startsWith(selectedRegion.value) ? i : selectedRegion.value == '' ? all_regions : null);

console.log(_regions());

// console.log(_regions());
// console.log(all_regions);



const filterRegions = (party) =>
  [...ResultsByRegions.Colors().flat()].filter((i) => i.party == party);
const filterOthers = [...ResultsByRegions.Colors().flat()].filter((i) =>
  i.party == "NDC" ? null : i.party == "NPP" ? null : i.party
);
const counts = {
  ndc: {
    regions: filterRegions("NDC"),
    count: filterRegions("NDC").length,
  },
  npp: {
    regions: filterRegions("NPP"),
    count: filterRegions("NPP").length,
  },
  others: {
    regions: filterOthers,
    count: filterOthers.length,
  },
};

// console.log(counts);
// console.log(stats);
// console.log(candidates);

const regions = Object.keys(candidates[0].regions).map((i, n) => ({
  region: i,
  id: n,
}));

const Rtable = ref({
  columns: [
    {
      name: "candidate",
      label: "Candidate",
      field: (row) => row.candidate,
      sortable: true,
      align: "center",
    },
    {
      name: "party",
      label: "Party",
      field: (row) => row.party,
      sortable: true,
      align: "center",
    },
    {
      name: "votes",
      label: "Votes",
      field: (row) => row.votes,
      sortable: true,
      align: "center",
      sortOrder: "ad",
    },
    {
      name: "percent",
      label: "Percent",
      field: (row) => row.percent,
      sortable: true,
      align: "center",
      sortOrder: "ad",
    },
  ],
  rows: ref(candidates.map((i, n) => fn_map_object(n, 0))),
  pagination: { page: 1, rowsPerPage: 12 },
  active: ref(false),
});






const tab = ref("Ahafo Region");
const splitterModel = ref(25);

onMounted(() => {
  Rtable.value.rows = candidates
    .map((i, n) => fn_map_object(n, 0))
    .sort((a, b) => b.votes - a.votes);

  // console.log(c);

  const k = regions.map((x, y) =>
    candidates.map((i, n) => fn_map_object(n, y))
  );
  // console.log(k[1]);
  const maxes = k
    .map((m, n) => m.map((i, r) => i.votes))
    .map((i) => Math.max(...i));

  const items = k
    .map((m, n) => m.map((i, r) => i))
    .map((x, l) => x.filter((i, n) => (i.votes == maxes[l] ? i : null)));
});

const clickTab = (e) => Rtable.value.rows = candidates.map((i, n) => fn_map_object(n, e.currentTarget.getAttribute("data-id"))).sort((a, b) => b.votes - a.votes);





</script>

<style scoped>
::-webkit-scrollbar {
  background-color: black;
}
</style>
