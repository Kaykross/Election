<template>
  <main>
    <section>
      <div class="row bg-brand text-white q-pa-sm">
        <div class="col-6">Region: {{ UpperEast.region }}</div>
        <div class="col-6">Capital: {{ UpperEast.capital }}</div>
      </div>
    </section>
    <section>
      <div>
        <q-card class="bg-milk-green">
          <q-card-section>
            <div class="text-h6 text-purple">
              <q-icon name="desktop_windows" /> Constituency:
              {{ ConstituencyData[0].constituency }}
            </div>
            <div class="text-subtitle2 text-grey-8">
              <q-icon name="code" /> EC Code: {{ ConstituencyData[0].code }}
            </div>
            <div class="text-subtitle2 text-grey-8">
              <q-icon name="place" /> District:
              {{ ConstituencyData[0].district }}
            </div>
            <div class="text-subtitle2 text-grey-8">
              <q-icon name="place" /> Capital: {{ ConstituencyData[0].capital }}
            </div>
            <div class="text-subtitle2 text-grey-9">
              <q-icon name="school" /> Won By: {{ Presidents[0]["party Id"] }}
            </div>
          </q-card-section>
          <q-card-section>
            <q-table
              :title="
                ConstituencyData[0].constituency + ` Presidential Results`
              "
              :rows="rows"
              :columns="columns"
              row-key="name"
              class="constituency-table"
              :pagination="pagination"
              card-class="bg-grey-4"
            >
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="candidate" :props="props" class="bl-ndc">
                    <div style="display: flex; justify-content: space-between">
                      <div class="">{{ props.row.candidate }}</div>
                      <div>
                        <q-img
                          :src="props.row.profile"
                          spinner-color="primary"
                          spinner-size="82px"
                          sizes="20px"
                          style="width: 40px; height: 40px"
                          class=""
                        />
                      </div>
                    </div>
                  </q-td>
                  <q-td key="party Id" :props="props">
                    <div style="display: flex; justify-content: space-between">
                      {{ props.row["party Id"] }}
                      <q-img
                        :src="props.row['party logo']"
                        spinner-color="primary"
                        spinner-size="82px"
                        style="
                          width: 40px;
                          height: 40px;
                          float: right;
                          clear: both;
                        "
                      />
                    </div>
                  </q-td>
                  <q-td key="party name" :props="props">
                    {{ props.row["party name"] }}
                  </q-td>
                  <q-td key="votes" :props="props">
                    <div style="display: flex; justify-content: space-between">
                      <q-badge color="purple">
                        {{ props.row.votes }}
                      </q-badge>
                      <q-icon
                        :color="props.row.votes == maxVote ? 'green' : 'red'"
                        :name="
                          props.row.votes == maxVote
                            ? 'arrow_upward'
                            : 'arrow_downward'
                        "
                      />
                    </div>
                  </q-td>
                  <q-td key="percent" :props="props">
                    <div style="display: flex; justify-content: space-between">
                      <q-badge color="primary">
                        {{ props.row.percent }} %
                      </q-badge>
                      <!-- <q-icon
                        size="24px"
                        :name="
                          props.row.votes == maxVote ? 'check' : 'show_chart'
                        "
                        :color="props.row.votes == maxVote ? `purple` : `green`"
                        style="float: right; clear: both"
                      >
                      </q-icon> -->
                    </div>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </q-card-section>
          <q-card-section>
            <q-table
              :title="
                ConstituencyData[0].constituency + ` Parliamentary Results`
              "
              :rows="rowsParl"
              :columns="columns"
              row-key="name"
              class="parliamentary-table"
              :pagination="pagination"
              card-class="bg-milk-green"
            >
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="candidate" :props="props" class="bl-ndc">
                    <div style="display: flex; justify-content: space-between">
                      <div class="">{{ props.row.candidate }}</div>
                      <div>
                        <!-- <q-img
                          :src="props.row.profile"
                          spinner-color="primary"
                          spinner-size="82px"
                          sizes="20px"
                          style="width: 40px; height: 40px"
                          class=""
                        /> -->
                      </div>
                    </div>
                  </q-td>
                  <q-td key="party Id" :props="props">
                    <div style="display: flex; justify-content: space-between">
                      {{ props.row["party Id"] }}
                      <q-img
                        :src="props.row['party logo']"
                        spinner-color="primary"
                        spinner-size="82px"
                        style="
                          width: 35px;
                          height: 25px;
                          float: right;
                          clear: both;
                        "
                      />
                    </div>
                  </q-td>
                  <q-td key="party name" :props="props">
                    {{ props.row["party name"] }}
                  </q-td>
                  <q-td key="votes" :props="props">
                    <div style="display: flex; justify-content: space-between">
                      <q-badge color="purple">
                        {{ props.row.votes }}
                      </q-badge>
                      <q-icon
                        :color="props.row.votes == maxParl ? 'green' : 'red'"
                        :name="
                          props.row.votes == maxParl
                            ? 'arrow_upward'
                            : 'arrow_downward'
                        "
                      />
                    </div>
                  </q-td>
                  <q-td key="percent" :props="props">
                    <div style="display: flex; justify-content: space-between">
                      <q-badge
                        class="q-pa-sm"
                        color="primary"
                        text-color="white"
                        :label="props.row.percent + ' %'"
                      />

                      <!-- <q-icon
                        size="24px"
                        :name="
                          props.row.votes == maxParl ? 'check' : 'show_chart'
                        "
                        :color="props.row.votes == maxParl ? `purple` : `green`"
                        style="float: right; clear: both"
                      >
                      </q-icon> -->
                    </div>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { UpperEast } from "../../../data/constituency results/upperEast";
import {
  format,
  constituency,
} from "../../../data/constituency results/__functions";
const Router = useRouter();
const Route = useRoute();
const c_name = Route.params.name.toString().replaceAll("-", " ");
const condition = UpperEast.results
  .map((i) => i.constituency.toLowerCase())
  .filter((i) => i.replaceAll("-", " ") == c_name);

// console.log(condition);

condition.length ? null : Router.push("/error/invalid-constituency-name");
const ConstituencyName = condition.length
  ? ref(c_name)
  : ref("cape coast south");

// console.log(ConstituencyName);

const ConstituencyData = constituency(UpperEast, ConstituencyName.value);
const filteredPrez = Object.values(ConstituencyData[0].candidates).filter((i) =>
  i.president.name == "" ? null : i.president.name == null ? null : i
);
const filteredParl = Object.values(ConstituencyData[0].candidates).filter((i) =>
  i.parliament.candidate == ""
    ? null
    : i.parliament.candidate == null
    ? null
    : i
);

// console.log(filteredParl);

const Total_Prez = filteredPrez
  .map((i) => i.president.votes)
  .reduce((m, n) => m + n);
const Total_Parl = filteredParl
  .map((i) => i.parliament.votes)
  .reduce((m, n) => m + n);
const percent = (value) => (value / Total_Prez) * 100;
const percentParl = (value) => (value / Total_Parl) * 100;

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
const Parliaments = filteredParl
  .map((i) => ({
    candidate: i.parliament.candidate,
    votes: i.parliament.votes,
    percent: format(percentParl(i.parliament.votes)),
    "party name": i.party.name,
    "party Id": i.party.id,
    "party logo": i.party.logo,
  }))
  .sort((a, b) => b.votes - a.votes);

const maxVote = Math.max(...Presidents.map((item) => item.votes));
const maxParl = Math.max(...Parliaments.map((item) => item.votes));

console.log(Parliaments);

const columns = [
  {
    name: "candidate",
    required: true,
    label: "Candidate".toLocaleUpperCase(),
    align: "left",
    icon: null,
    field: (row) => row.candidate,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "party Id",
    required: true,
    label: "Party ID".toLocaleUpperCase(),
    align: "left",
    icon: null,
    field: (row) => row["party Id"],
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "votes",
    required: true,
    label: "votes".toLocaleUpperCase(),
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
    label: "Percent".toLocaleUpperCase(),
    align: "left",
    icon: null,
    field: (row) => row.percent,
    format: (val) => `${val} %`,
    sortable: true,
  },
];

const rows = Presidents;
const rowsParl = Parliaments;
const pagination = { page: 1, rowsPerPage: 12 };

onMounted(() => {
  const table = document.querySelector(".constituency-table table");
  const tableParl = document.querySelector(".parliamentary-table table");
  const getTableRow = (qTable, party) =>
    Array.from(qTable.children[1].children).filter(
      (i) => i.children[1].children[0].innerText == party
    );

  const setBorder = (qTable, party, color) => {
    if (getTableRow(qTable, party).length > 0) {
      getTableRow(
        qTable,
        party
      )[0].children[0].style.borderLeft = `4px solid ${color}`;
      getTableRow(
        qTable,
        party
      )[0].children[3].style.borderRight = `4px solid ${color}`;
    }
  };

  const partyColorCodes = [
    { party: "NPP", color: "navy" },
    { party: "NDC", color: "green" },
    { party: "GUM", color: "brown" },
    { party: "CPP", color: "purple" },
    { party: "APC", color: "cornflowerblue" },
    { party: "LPG", color: "chocolate" },
    { party: "NDP", color: "red" },
    { party: "IND", color: "black" },
    { party: "PNC", color: "orange" },
    { party: "GCPP", color: "teal" },
    { party: "GFP", color: "maroon" },
    { party: "PPP", color: "lime" },
    { party: "IND2", color: "DeepPink" },
    { party: "UPP", color: "teal" },
  ];

  partyColorCodes.forEach((item) => setBorder(table, item.party, item.color));
  partyColorCodes.forEach((item) =>
    setBorder(tableParl, item.party, item.color)
  );
  const firstRow = (qTable) =>
    qTable.children[1].children[0].children[1].innerText;

  const bgFirstRow = (qTable, party, bgColor, textColor = "text-white") =>
    firstRow(qTable) == party
      ? qTable.children[1].children[0].classList.add(...[bgColor, textColor])
      : null;
  bgFirstRow(table, "NPP", "bg-primary");
  bgFirstRow(table, "NDC", "bg-green");
  bgFirstRow(tableParl, "NPP", "bg-primary");
  bgFirstRow(tableParl, "NDC", "bg-green");
  bgFirstRow(tableParl, "IND", "bg-brand");

  // console.log(table.children[1].children[0].children[1].innerText);
});
</script>

<style scoped lang="scss">
// .bl-ndc {
//   border-left: 2px solid green;
// }

tr {
  text-transform: uppercase;
}
</style>
