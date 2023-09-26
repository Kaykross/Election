<template>
  <Doughnut :data="data" :options="options" />
</template>

<script>
import { _2020 } from "../../data/stats/2020";
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, Title);
const { candidates } = _2020;
const data = {
  labels: candidates.map((i) => i.party.id),
  datasets: [
    {
      backgroundColor: [
        "green",
        "blue",
        "indigo",
        "brown",
        "yellow",
        "pink",
        "black",
        "grey",
        "antiquewhite",
        "red",
        "lime",
        "white",
      ],
      data: candidates.map((i) => i.votes),
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      enabled: true,
    },
    title: {
      display: true,
      text: "2020 PRESIDENTIAL ELECTION RESULTS",
    },
  },
};

export default {
  name: "DoughnutChart",
  components: {
    Doughnut,
  },
  setup() {
    return { data, options };
  },
};
</script>
