<template>
  <Bar :data="data" :options="options" />
</template>

<script>
import { _2020 } from "../../data/stats/2020";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const colors = ["green", "blue", "brown", "orange", "pink"];
const { candidates } = _2020;

const data = candidates.map((c) => {
  return { label: c.party.id, count: c.votes };
});

export default {
  name: "BarChart",
  components: {
    Bar,
  },
  setup() {
    return {
      // data: {
      //   labels: data.map((i) => i.label),
      //   datasets: [
      //     { label: "2020 election Results", data: data.map((i) => i.count) },

      //     // { label: "Acquisitions by month", data: [40, 20, 12, 80, 60, 30] },
      //   ],
      // },
      data: {
        labels: candidates.map((i) => i.party.id),
        datasets: [
          {
            label: "2020 Results",
            data: candidates.map((i) => i.votes),
            backgroundColor: candidates.map((element, i, array) => colors[i]),
          },
        ],
      },

      options: {
        responsive: true,
        animation: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            enabled: true,
          },
          aspectRatio: 2.0,
          title: {
            display: false,
            text: "Chart.js Bar Chart",
          },
        },
        scales: {
          y: {
            beginAtZero: false,
            min: 500,
            // max: 200000,
            ticks: {
              stepSize: 10000,
            },
          },
        },
      },
    };
  },
};
</script>

<style></style>
