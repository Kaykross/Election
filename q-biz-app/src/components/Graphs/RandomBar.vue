<template>
  <Bar :data="data" :options="options" />
</template>

<script setup>
import { ref, onMounted } from "vue";
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
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const getRandomInt = () => Math.floor(Math.random() * (60 - 5 + 1)) + 5;
const randomData = () => ({
  labels: [
    "January" + getRandomInt(),
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      data: [
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
        getRandomInt(),
      ],
    },
  ],
});

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const data = ref({
  datasets: [],
});

onMounted(() => {
  setInterval(() => {
    data.value = randomData();
  }, 2000);
});
</script>
