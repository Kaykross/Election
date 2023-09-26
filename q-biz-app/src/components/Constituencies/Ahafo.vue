<template>
  <main>
    <section>
      <div class="row bg-brand text-white q-pa-sm">
        <div class="col-6">Region: {{ Ahafo.region }}</div>
        <div class="col-6">Capital: {{ Ahafo.capital }}</div>
      </div>
    </section>
    <section>
      <div>
        <q-card class="bg-milk-green">
          <q-card-section>
            <div class="text-h6 text-purple">
              <q-icon name="desktop_windows" /> Constituency:
              {{ Ahafo.results[0].constituency }}
            </div>
            <div class="text-subtitle2 text-grey-8">
              <q-icon name="code" /> EC Code: {{ Ahafo.results[0].code }}
            </div>
            <div class="text-subtitle2 text-grey-8">
              <q-icon name="place" /> District: {{ Ahafo.results[0].district }}
            </div>
            <div class="text-subtitle2 text-grey-8">
              <q-icon name="place" /> Capital: {{ Ahafo.results[0].capital }}
            </div>
            <div class="text-subtitle2 text-grey-9">
              <q-icon name="school" /> Won By: Party
            </div>
          </q-card-section>
          <q-card-section class="">
            <q-table
              class="bg-grey-4"
              :rows="rows"
              :columns="columns"
              row-key="name"
            />
          </q-card-section>
        </q-card>
      </div>
    </section>
  </main>
</template>

<script>
import { onMounted } from "vue";
import { useLink, useRoute, useRouter } from "vue-router";
import { Ahafo } from "../../data/constituency results/ahafo";
// const { format } = new Intl.NumberFormat("en-US", { maximumFractionDigits: 3 });

import {
  format,
  constituency,
} from "../../data/constituency results/__functions";

const asunafo_south = constituency(Ahafo, "asunafo south");

// Ahafo.results.filter(
//   (ahafo) => ahafo.constituency == "Asunafo South"
// );

const filteredPrez = Object.values(asunafo_south[0].candidates).filter((i) =>
  i.president.name == "" ? null : i.president.name == null ? null : i
);
const Total_Prez = filteredPrez
  .map((i) => i.president.votes)
  .reduce((m, n) => m + n);
const percent = (value) => (value / Total_Prez) * 100;

const Presidents = filteredPrez
  .map((i) => ({
    candidate: i.president.name,
    profile: i.president.profile,
    "filing date": i.president["filing Date"],
    "running mate": i.president["running mate"],
    "running mate profile": i.president["running mate profile"],
    votes: i.president.votes,
    percent: format(percent(i.president.votes)),
    "party name": i.party.name,
    "party Id": i.party.id,
    "party logo": i.party.logo,
  }))
  .sort((a, b) => b.votes - a.votes);

// console.log(Total_Prez);

console.log(Presidents);

const columns = [
  {
    name: "candidate",
    required: true,
    label: "Candidate",
    align: "left",
    icon: null,
    field: (row) => row.candidate,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "party",
    required: true,
    label: "Party",
    align: "left",
    icon: null,
    field: (row) => row["party Id"],
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "votes",
    required: true,
    label: "votes",
    align: "left",
    icon: null,
    field: (row) => row.votes,
    format: (val) => `${val}`,
    sortable: true,
    sortOrder: "da",
  },
  {
    name: "percent",
    required: true,
    label: "Percent",
    align: "left",
    icon: null,
    field: (row) => row.percent,
    format: (val) => `${val}%`,
    sortable: true,
  },
];
// const rows = [{ region: "A", party: "PPP", votes: 10 }];
const rows = Presidents;
export default {
  name: "AhafoRegion",
  setup() {
    const Router = useRouter();
    const Route = useRoute();
    onMounted(() => {
      console.log(Route.params);
    });
    return {
      Ahafo,
      columns,
      rows,
    };
  },
};
</script>

<style></style>
