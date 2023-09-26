<template>
  <PolarArea :data="data" :options="options" />
</template>

<script>
import { _2020 } from "../../data/stats/2020";
import { PolarArea } from "vue-chartjs";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
const { candidates } = _2020;
const data = {
  labels: candidates.map((i) => i.party.id),
  datasets: [
    {
      label: "Election 2020 Results",
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
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
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
  name: "polarChat",
  components: {
    PolarArea,
  },
  data() {
    return { data, options };
  },
};
</script>
