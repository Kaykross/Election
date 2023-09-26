<template>
  <q-bar dark class="bg-black text-white">
    <q-btn dense flat round icon="lens" size="8.5px" color="red" />
    <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
    <q-btn dense flat round icon="lens" size="8.5px" color="green" />
    <div class="text-weigh">
      <q-breadcrumbs separator="&rarr;" separator-color="green">
        <q-breadcrumbs-el label="Home" class="text-orange" />
        <q-breadcrumbs-el label="Dashboard" class="text-orange" />
        <q-breadcrumbs-el label="Elections" class="text-orange" />
        <q-breadcrumbs-el label="National Results" class="text-orange" />
      </q-breadcrumbs>
    </div>
  </q-bar>
  <div class="q-pa-md">
    <div class="row q-col-gutter-xs">
      <div class="col-3" v-for="stat in e_stats" :key="stat.item">
        <q-card class="item-card bg-primary text-white q-pa-md text-center">
          <div class="stats">{{ stat.value }}</div>
          <div style="text-transform: capitalize">{{ stat.item }}</div>
        </q-card>
      </div>
    </div>
  </div>
  <div class="q-pa-md">
    <h6 class="text-center">Top Two Leading Parties</h6>
    <div class="row q-col-gutter-xs">
      <div class="col">
        <q-card class="item-card bg-black text-white q-pa-md text-center">
          <div>
            <q-img
              :src="p_candidates[0].profile"
              spinner-color="primary"
              spinner-size="82px"
              style="height: 350px"
            />
          </div>
          <div class="stats">
            {{ p_candidates[0].votes }}
            <q-icon
              name="arrow_upward"
              :color="p_candidates[0].votes == maxVote ? 'green' : 'red'"
            />
          </div>
          <div style="text-transform: capitalize">
            {{ p_candidates[0].name }}
          </div>
          <div style="text-transform: capitalize">
            {{ p_candidates[0].party.name }}
          </div>
          <q-badge
            :color="p_candidates[0].votes == maxVote ? 'green' : 'red'"
            text-color="white"
            :label="p_candidates[0].votes == maxVote ? 'leading' : 'trailing'"
          />
        </q-card>
      </div>
      <div class="col">
        <q-card class="item-card bg-black text-white q-pa-md text-center">
          <div>
            <q-img
              :src="p_candidates[1].profile"
              spinner-color="primary"
              spinner-size="82px"
              style="height: 350px"
            />
          </div>
          <div class="stats">
            {{ p_candidates[0].votes }}
            <q-icon
              name="arrow_upward"
              :color="p_candidates[1].votes == maxVote ? 'green' : 'red'"
            />
          </div>
          <div style="text-transform: capitalize">
            {{ p_candidates[1].name }}
          </div>
          <div style="text-transform: capitalize">
            {{ p_candidates[1].party.name }}
          </div>
          <q-badge
            :color="p_candidates[1].votes == maxVote ? 'green' : 'red'"
            text-color="white"
            :label="p_candidates[1].votes == maxVote ? 'leading' : 'trailing'"
          />
        </q-card>
      </div>
    </div>
  </div>

  <div class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-6">
        <q-card class="my-card bg-milk-green">
          <doughnut />
        </q-card>
      </div>
      <div class="col-6">
        <q-card class="my-card" style="height: 100%">
          <barchat style="height: 100%; width: 100%"></barchat>
        </q-card>
      </div>
    </div>
  </div>
  <div class="q-pa-md">
    <div class="col-12">
      <q-card class="my-card">
        <q-card-section>
          <q-table
            title="PRESIDENTIAL ELECTION RESULTS"
            :rows="rows"
            :columns="columns"
            row-key="name"
          >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="candidate" :props="props">
                  <span>{{ props.row.name }}</span>
                  <q-img
                    :src="props.row.profile"
                    spinner-color="primary"
                    spinner-size="82px"
                    sizes="20px"
                    style="width: 40px; height: 40px; float: right; clear: both"
                  />
                </q-td>
                <q-td key="party id" :props="props">
                  {{ props.row.party.id }}
                  <q-img
                    :src="props.row.party.logo"
                    spinner-color="primary"
                    spinner-size="82px"
                    style="width: 40px; height: 40px; float: right; clear: both"
                  />
                </q-td>
                <q-td key="party name" :props="props">
                  {{ props.row.party.name }}
                </q-td>
                <q-td key="votes" :props="props">
                  <q-badge color="purple">
                    {{ props.row.votes }}
                  </q-badge>
                  <q-icon
                    :color="props.row.votes == maxVote ? 'green' : 'red'"
                    style="float: right; clear: both"
                    :name="
                      props.row.votes == maxVote
                        ? 'arrow_upward'
                        : 'arrow_downward'
                    "
                  />
                </q-td>
                <q-td key="percentage" :props="props">
                  <q-badge color="primary">
                    {{ props.row.percentage }}
                  </q-badge>
                  <q-icon
                    size="24px"
                    :name="props.row.votes == maxVote ? 'school' : 'show_chart'"
                    :color="props.row.votes == maxVote ? `red` : `green`"
                    style="float: right; clear: both"
                  ></q-icon>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </q-card-section>
      </q-card>
    </div>
  </div>

  <div class="q-pa-md">
    <div class="row q-col-gutter-sm">
      <div class="col-12 row q-col-gutter-sm">
        <div
          class="col-4"
          v-for="candidate in p_candidates"
          :key="candidate.name"
        >
          <q-card class="my-card" style="height: 100%; position: relative">
            <img
              :src="candidate.profile"
              height="300"
              style="object-fit: cover"
            />
            <q-card-section>
              <div class="text-h6">{{ candidate.name }}</div>
              <div class="text-subtitle2">
                {{ candidate.party.id }} ~ {{ candidate.party.name }}
              </div>
            </q-card-section>
            <q-card-section>
              <div>
                <q-img
                  :src="candidate.party.logo"
                  spinner-color="primary"
                  spinner-size="40px"
                  style="width: 40px"
                />
                <span style="margin-left: 5px">
                  ({{ candidate.party.id }})</span
                >
                <span style="margin-left: 5px"></span>
                <span style="margin-left: 5px">
                  {{ candidate.party.name }}</span
                >
                <div>
                  Results:
                  <q-badge
                    color="green"
                    text-color="white"
                    :label="candidate.votes"
                  />
                </div>
              </div>
            </q-card-section>
            <div
              class="bg-brand text-white shadow-4"
              style="
                border-radius: 50%;
                height: 40px;
                width: 40px;
                display: grid;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 0;
              "
            >
              <!-- {{ getIndex(sortedVotes.indexOf(candidate.votes) + 1) }} -->
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import doughnut from "./chart/doughnut.vue";
import barchat from "./chart/barchat.vue";
import { _2020 } from "../data/stats/2020";
import { dougnut_2020 } from "../data/stats/dashboard";
const { columns, rows } = dougnut_2020;
const { candidates, stats, rank } = _2020;
const maxVote = Math.max(...rows.map((i) => i.votes));

export default {
  name: "AppDashboard",
  components: { doughnut, barchat },
  setup() {
    return {
      columns,
      rows,
      _2020,
      maxVote,
      e_stats,
      // sortedVotes,
      // getIndex,
    };
  },
};
</script>

<style>
.stats {
  font-size: 30px;
  font-weight: bolder;
  text-align: center;
}
.item-card {
  border: 1px solid rgb(42, 61, 165) !important;
  border-left: 2px solid rgb(42, 61, 165) !important;
}
</style>
