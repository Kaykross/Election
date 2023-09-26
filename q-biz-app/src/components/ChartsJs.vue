<template>
  <div class="">
    <div class="row q-col-gutter-sm q-pa-md">
      <div class="col-4">
        <q-card class="">
          <bar-chart></bar-chart>
        </q-card>
      </div>
      <div class="col-4">
        <q-card class="">
          <line-chart></line-chart>
        </q-card>
      </div>
      <div class="col-4">
        <q-card class="">
          <bubble-chart></bubble-chart>
        </q-card>
      </div>
      <div class="col-4">
        <q-card class="">
          <doughnut-chart></doughnut-chart>
        </q-card>
      </div>
      <div class="col-4">
        <q-card class="">
          <pie-chart></pie-chart>
        </q-card>
      </div>
      <div class="col-4">
        <q-card class="col-4">
          <polar-chart></polar-chart>
        </q-card>
      </div>
      <div class="col-4">
        <q-card class="col-4">
          <q-card-section>
            <radar-chart></radar-chart>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4">
        <q-card class="col-4">
          <q-card-section>
            <scatter-chart></scatter-chart>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4">
        <q-card class="col-4">
          <q-card-section>
            <random-bar></random-bar>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "./Graphs/BarChart.vue";
import LineChart from "./Graphs/LineGraph.vue";
import BubbleChart from "./Graphs/BubbleChart.vue";
import DoughnutChart from "./Graphs/DoughnutChart.vue";
import PieChart from "./Graphs/PieChart.vue";
import PolarChart from "./Graphs/PolarChart.vue";
import RadarChart from "./Graphs/RadarChart.vue";
import ScatterChart from "./Graphs/ScatterChart.vue";
import RandomBar from "./Graphs/RandomBar.vue";
export default {
  name: "AppCharts",
  components: {
    BarChart,
    LineChart,
    BubbleChart,
    DoughnutChart,
    PieChart,
    PolarChart,
    RadarChart,
    ScatterChart,
    RandomBar,
  },
};
</script>

<style></style>
