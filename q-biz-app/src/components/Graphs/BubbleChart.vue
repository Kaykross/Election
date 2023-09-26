<template>
  <Bubble :data="data" :options="options" />
</template>

<script>
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  PointElement,
  LinearScale,
} from "chart.js";
import { Bubble } from "vue-chartjs";
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
const data = {
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      data: [
        {
          x: 20,
          y: 25,
          r: 5,
        },
        {
          x: 40,
          y: 10,
          r: 10,
        },
        {
          x: 30,
          y: 22,
          r: 30,
        },
      ],
    },
    {
      label: "Data Two",
      backgroundColor: "#7C8CF8",
      data: [
        {
          x: 10,
          y: 30,
          r: 15,
        },
        {
          x: 20,
          y: 20,
          r: 10,
        },
        {
          x: 15,
          y: 8,
          r: 30,
        },
      ],
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
      text: "Chart.js Bubble Chart",
    },
  },
};

export default {
  name: "BubbleChart",
  components: {
    Bubble,
  },
  setup() {
    return { data, options };
  },
};
</script>
