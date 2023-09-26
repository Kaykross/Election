<template>
  <div>
    <!-- for the statistics -->
    <div class="q-pa-md">
      <div class="row q-col-gutter-xs">
        <div
          class="col-xs-6 col-sm-4 col-md-3"
          v-for="stat in stats"
          :key="stat.stat"
        >
          <q-card
            class="bg-brand q-pa-md text-center"
            style="height: 100% !important"
          >
            <div
              class="stats text-white text-weight-bold"
              style="font-size: 25px"
            >
              {{ stat.value }}
            </div>
            <div class="text-grey-6" style="text-transform: capitalize">
              {{ stat.label }}
            </div>
          </q-card>
        </div>
      </div>
    </div>
    <!-- leading votes -->
    <div class="q-pa-md">
      <h6 class="text-center">Top Two Leading Parties</h6>
      <div class="row q-col-gutter-xs">
        <div class="col">
          <q-card class="item-card bg-black text-white q-pa-md text-center">
            <div>
              <q-img
                :src="sortedVotes[0].profile"
                spinner-color="primary"
                spinner-size="82px"
                style="height: 450px"
              />
            </div>
            <div class="stats">
              {{ format(sortedVotes[0].votes) }}
              <q-icon
                name="arrow_upward"
                :color="sortedVotes[0].votes == maxVote ? 'green' : 'red'"
              />
            </div>
            <div style="text-transform: capitalize">
              {{ sortedVotes[0].name }}
            </div>
            <div style="text-transform: capitalize">
              {{ sortedVotes[0].party.name }}
            </div>
            <q-badge
              :color="sortedVotes[0].votes == maxVote ? 'green' : 'red'"
              text-color="white"
              :label="sortedVotes[0].votes == maxVote ? 'leading' : 'trailing'"
            />
          </q-card>
        </div>
        <div class="col">
          <q-card class="item-card bg-black text-white q-pa-md text-center">
            <div>
              <q-img
                :src="sortedVotes[1].profile"
                spinner-color="primary"
                spinner-size="82px"
                style="height: 450px"
              />
            </div>
            <div class="stats">
              {{ format(sortedVotes[1].votes) }}
              <q-icon
                name="arrow_upward"
                :color="sortedVotes[1].votes == maxVote ? 'green' : 'red'"
              />
            </div>
            <div style="text-transform: capitalize">
              {{ sortedVotes[1].name }}
            </div>
            <div style="text-transform: capitalize">
              {{ sortedVotes[1].party.name }}
            </div>
            <q-badge
              :color="sortedVotes[1].votes == maxVote ? 'green' : 'red'"
              text-color="white"
              :label="sortedVotes[1].votes == maxVote ? 'leading' : 'trailing'"
            />
          </q-card>
        </div>
      </div>
    </div>
    <!-- doughnut chart polar chart and barchat -->
    <div class="q-pa-md">
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-sm-12 col-md-6">
          <q-card class="my-card bg-milk-green; min-height: 600px;">
            <doughnut style="min-height: 100%"></doughnut>
          </q-card>
          <q-card class="my-card bg-milk-green; min-height: 600px;">
            <polarchat style="min-height: 100%"></polarchat>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <q-card class="my-card" style="height: 600px">
            <barchat style="height: 100%; width: 100%"></barchat>
          </q-card>
        </div>
      </div>
    </div>

    <!-- frequency table distribution -->
    <div class="q-pa-md">
      <div class="col-12">
        <q-card class="my-card">
          <q-card-section>
            <q-table
              title="PRESIDENTIAL ELECTION RESULTS"
              :rows="table.rows()"
              :columns="table.columns()"
              row-key="name"
              class="bg-grey-3"
              table-header-class="bg-brand text-white"
              table-header-style="font-weight:bolder"
            >
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="candidate" :props="props">
                    <div style="display: flex; justify-content: space-between">
                      <div class="">{{ props.row.name }}</div>
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
                  <q-td key="party id" :props="props">
                    <div style="display: flex; justify-content: space-between">
                      {{ props.row.party.id }}
                      <q-img
                        :src="props.row.party.logo"
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
                    {{ props.row.party.name }}
                  </q-td>
                  <q-td key="votes" :props="props">
                    <div style="display: flex; justify-content: space-between">
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
                    </div>
                  </q-td>
                  <q-td key="percentage" :props="props">
                    <div style="display: flex; justify-content: space-between">
                      <q-badge color="primary">
                        {{ props.row.percentage }}
                      </q-badge>
                      <q-icon
                        size="24px"
                        :name="
                          props.row.votes == maxVote ? 'check' : 'show_chart'
                        "
                        :color="props.row.votes == maxVote ? `purple` : `green`"
                        style="float: right; clear: both"
                      >
                      </q-icon>
                    </div>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- candidates, party, vice and ranking -->
    <div class="q-pa-md">
      <div class="row q-col-gutter-sm">
        <div class="col-12 row q-col-gutter-sm">
          <div
            class="col-4"
            v-for="candidate in candidates"
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
                {{
                  rank(
                    sortedVotes.map((i) => i.votes).indexOf(candidate.votes) + 1
                  )
                }}
              </div>
              <div
                class="bg-brand text-white shadow-4"
                style="
                  border-radius: 50%;
                  height: 80px;
                  width: 80px;
                  display: grid;
                  align-items: center;
                  justify-content: center;
                  position: absolute;
                  top: 37%;
                  right: 0;
                "
                v-if="candidate['running mate profile']"
              >
                <img
                  :src="candidate['running mate profile']"
                  style="object-fit: cover; height: 80px; width: 80px"
                />
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <div class="q-pa-xs">
      <div class="row q-col-gutter-sm">
        <div class="col-12">
          <q-card class="my-card bg-grey-4">
            <div class="map-title">
              <h5>2020 Regional Presidential Results</h5>
              <h6>
                Click on a region to view the regional distribution of votes
              </h6>
            </div>
            <q-card-section>
              <ghanamap></ghanamap>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-- regional votes distribution -->
    <div class="q-pa-md">
      <div class="col-12">
        <q-card class="my-card">
          <q-card-section>
            <q-table
              title="2020 PRESIDENTIAL ELECTION RESULTS"
              :rows="RegonalResults.rows"
              :columns="RegonalResults.columns"
              row-key="name"
              table-class="sticky-first-column bg-grey-4"
              class="sticky-first-column bg-grey-4"
            >
              <template v-slot:header="props">
                <q-th
                  :props="props"
                  v-for="col in props.cols"
                  :key="col.name"
                  class="bg-brand"
                >
                  <q-img
                    :src="col.icon"
                    spinner-color="primary"
                    spinner-size="82px"
                    style="font-size: 14px; width: 25px; height: 20px"
                  />
                  {{ col.label }}
                </q-th>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { _2020 } from "../../data/stats/2020";
import doughnut from "../chart/doughnut.vue";
import barchat from "../chart/barchat.vue";
import polarchat from "../chart/polarchat.vue";
import ghanamap from "../Maps/presidential/map_2020.vue";
const {
  candidates,
  stats,
  rank,
  maxVote,
  sortedVotes,
  format,
  table,
  RegonalResults,
} = _2020;
rank(sortedVotes.map((i) => i.votes).indexOf(candidates[0].votes) + 1);

const visibleRegionalColumns = ref(candidates.map((i) => i.party.id));

export default {
  components: { doughnut, barchat, polarchat, ghanamap },
  setup() {
    return {
      candidates,
      sortedVotes,
      stats,
      rank,
      maxVote,
      format,
      table,
      RegonalResults,
      visibleRegionalColumns,
    };
  },
};
</script>

<style lang="scss">
.map-title {
  h5 {
    font-size: 16px;
    font-weight: bolder;
    text-align: center;
    font-family: sans-serif;
  }
  h6 {
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    text-decoration: italic;
  }
}
</style>
