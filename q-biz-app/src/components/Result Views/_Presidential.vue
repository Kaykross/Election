<template>
  <div class="result">
    <section class="regional-results-tab q-pa-md">
      <div>
        <q-splitter v-model="splitterModel" style="height: 75vh" class="bg-brand" :limits="[18, 30]">
          <template v-slot:before>
            <q-tabs v-model="tab" inline-label vertical class="text-white" active-bg-color="black"
              indicator-color="orange" outside-arrows mobile-arrows breakpoint="600" stretch>
              <q-tab v-for="region in regions" :key="region.region" :name="region.region" :data-id="region.id"
                :icon="'place'" :label="region.region" style="display: flex; justify-content: space-between"
                @click="clickTab" />
            </q-tabs>
          </template>

          <template v-slot:separator>
            <q-avatar color="black" text-color="white" size="40px" icon="drag_indicator" />
          </template>

          <template v-slot:after>
            <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up"
              class="bg-milk-green" style="
                height: 100%;
                width: 100%;
                padding: 0 !important;
                margin: 0 !important;
                overflow-x: auto;
              ">
              <q-tab-panel v-for="region in regions" :key="region.region" :name="region.region"
                style="margin: 0; padding: 0">
                <div class="text-h6 bg-brand text-white text-center q-pa-sm">
                  {{ region.region }}
                </div>
                <div>
                  <q-card>
                    <q-table :rows="Rtable.rows" :columns="Rtable.columns" row-key="name" class="bg-milk-green"
                      :pagination="Rtable.pagination" separator="cell">
                      <template v-slot:body="props">
                        <q-tr :props="props">
                          <q-td key="candidate" :props="props">
                            <div style="
                                display: flex;
                                justify-content: space-between;
                                font-weight: 500;
                              ">
                              <div class="text-grey-9" style="font-weight: bolder; font-size: 16px;">{{
                                props.row.candidate.name }}</div>

                              <q-img :src="props.row.candidate.profile" spinner-color="primary" spinner-size="82px" style="
                                  width: 45px;
                                  height: 40px;
                                  float: right;
                                  clear: both;
                                " />
                            </div>
                          </q-td>
                          <q-td key="party" :props="props">
                            <div style="
                                display: flex;
                                justify-content: space-between;
                              ">
                              <div class="text-bold">{{ props.row.party.id }}</div>
                              <q-img :src="props.row.party.logo" spinner-color="primary" spinner-size="82px" style="
                                  width: 40px;
                                  height: 35px;
                                  float: right;
                                  clear: both;
                                " />
                            </div>
                          </q-td>
                          <q-td key="votes" :props="props">
                            <div class="bg-brand text-white"
                              style="font-weight: bolder; font-size: 35px; border-radius: 10px;">
                              {{ props.row.votes.toLocaleString("en-US") }}
                            </div>
                          </q-td>
                          <q-td key="percent" :props="props">
                            <div class="bg-purple text-white text-center"
                              style="font-weight: bolder; font-size: 35px; border-radius: 10px;">
                              {{ props.row.percent }}%
                            </div>
                          </q-td>
                        </q-tr>
                      </template>
                    </q-table>
                  </q-card>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </template>
        </q-splitter>
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
      <heat-map class="bg-milk-green"></heat-map>
    </section>
    <section class="regional-stats q-pa-md">
      <div class="bg-brand text-white text-center q-my-sm q-pa-sm text-bold">REGIONAL PARLIAMENTARY SEATS SUMMARY</div>
    </section>

    <section class="regional-stats q-pa-md">
      <div class="bg-brand text-white text-center q-mb-sm q-pa-sm text-bold">
        NUMBER OF REGIONS WON BY NDC {{ counts.ndc.count }}
      </div>
      <div class="row q-col-gutter-xs">
        <div class="col-xs-6 col-sm-4 col-md-3" v-for="stat in counts.ndc.regions" :key="stat.regions"
          @click="router.removeRoute(createLink(stat.regions))">
          <q-card class="bg-brand q-pa-md text-center" style="height: 100% !important">
            <div class="stats text-white text-weight-bold" style="font-size: 20px">
              {{ stat.regions }}
            </div>
            <div class="text-grey-6" style="text-transform: capitalize">
              {{ candidates[1].party.id }}
              <q-img :src="candidates[1].party.logo" spinner-color="primary" spinner-size="82px" width="25px"
                height="20px" />
            </div>
          </q-card>
        </div>
      </div>
      <div class="bg-brand text-white text-center q-my-sm q-pa-sm text-bold">
        NUMBER OF REGIONS WON BY NPP {{ counts.npp.count }}
      </div>
      <div class="row q-col-gutter-xs">
        <div class="col-xs-6 col-sm-4 col-md-3" v-for="stat in counts.npp.regions" :key="stat.regions"
          @click="router.push(createLink(stat.regions))">
          <q-card class="bg-brand q-pa-md text-center" style="height: 100% !important">
            <div class="stats text-white text-weight-bold" style="font-size: 20px">
              {{ stat.regions }}
            </div>
            <div class="text-grey-6" style="text-transform: capitalize">
              {{ candidates[0].party.id }}
              <q-img :src="candidates[0].party.logo" spinner-color="primary" spinner-size="82px" width="25px"
                height="20px" />
            </div>
          </q-card>
        </div>
      </div>
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

<script>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import heat_map from "../Maps/presidential/heat_map.vue";
import { _2020 } from "../../data/stats/2020";
const { candidates, fn_map_object, ResultsByRegions, stats } = _2020;
const createLink = (text) => text.replace(/\s+region/gmi, '').replace(/\s/gmi, '-').toLowerCase();
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
console.log(candidates);

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

// console.log(candidates);

export default {
  components: {
    "heat-map": heat_map,
  },
  setup() {
    const router = useRouter();
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

    return {
      tab,
      splitterModel,
      Rtable,
      regions,
      counts,
      stats,
      candidates,
      router,
      createLink,
      clickTab(e) {
        Rtable.value.rows = candidates
          .map((i, n) =>
            fn_map_object(n, e.currentTarget.getAttribute("data-id"))
          )
          .sort((a, b) => b.votes - a.votes);
      },
    };
  },
};

const text = "greater mafi kumase region";



console.log(createLink(text));
</script>

<style scoped>
::-webkit-scrollbar {
  background-color: black;
}
</style>
