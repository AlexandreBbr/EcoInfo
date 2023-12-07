<template>
    <div>
      <Navbar></Navbar>
  
      <section class="py-8">
        <div class="container mx-auto">
          <h2 class="text-3xl font-semibold mb-4">Introduction to Climate Change</h2>
          <p class="text-gray-700">
            Climate change refers to significant, long-term changes in the average temperature, weather patterns, and other climate parameters on Earth.
            This section provides a brief overview of the key concepts and factors contributing to climate change.
          </p>
        </div>
      </section>
  
      <section class="py-8 bg-gray-100">
        <div class="container mx-auto">
          <h2 class="text-3xl font-semibold mb-4">Solutions to Climate Change</h2>
          <p class="text-gray-700">
            Explore sustainable solutions and practices that can help mitigate the impact of climate change.
            This section highlights actions individuals and communities can take to contribute to a more sustainable future.
          </p>
        </div>
      </section>
  
      <section class="py-8">
      <div class="container mx-auto">
        <h2 class="text-3xl font-semibold mb-4">Impact of Climate Change on Ecosystems</h2>
        <p class="text-gray-700">
          Understand how climate change affects ecosystems, biodiversity, and natural habitats.
          This section delves into the ecological consequences of global warming and related phenomena.
        </p>
        <canvas ref="ecosystemChart" width="400" height="200"></canvas>
      </div>
    </section>
    
    </div>
  </template>
  
  <script>
  import Navbar from './Items/Navbar.vue';
  import Chart from 'chart.js/auto';
  
  export default {
    name: 'EducationPage',
    components: { Navbar },
    mounted() {
      const ecosystemData = {
        labels: ['Forest', 'Ocean', 'Polar Regions', 'Grasslands', 'Urban Areas'],
        datasets: [{
          label: 'Impact on Ecosystems',
          backgroundColor: '#36A2EB',
          borderColor: '#36A2EB',
          borderWidth: 1,
          data: [4, 3, 2, 5, 1],
        }],
      };
  
      const ecosystemChartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
  
      const ecosystemChart = new Chart(this.$refs.ecosystemChart, {
        type: 'bar',
        data: ecosystemData,
        options: ecosystemChartOptions,
      });
    },
  };
  </script>

  