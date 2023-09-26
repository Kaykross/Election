<template>
  <Bar :data="data" :options="options" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Colors,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors
);

const data = [
  { label: "January", count: 10 },
  { label: "February", count: 20 },
  { label: "March", count: 15 },
  { label: "April", count: 25 },
  { label: "May", count: 22 },
  { label: "June", count: 30 },
  { label: "July", count: 28 },
];

export default {
  name: "BarChart",
  components: {
    Bar,
  },
  setup() {
    return {
      data: {
        labels: data.map((i) => i.label),
        datasets: [
          { label: "Acquisitions by year", data: [40, 20, 12, 80, 60, 30] },

          { label: "Acquisitions by month", data: [40, 20, 12, 80, 60, 30] },
        ],
      },
      options: {
        responsive: true,
        animation: true,
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            enabled: true,
          },
          title: {
            display: true,
            text: "Chart.js Bar Chart",
          },
        },
      },
    };
  },
};
</script>

<style></style>
