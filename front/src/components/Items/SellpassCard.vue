<template>
<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700" style="margin-left: 30%;">
      <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        Weather
      </h5>
      <div>
        <label for="city" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Choose City</label>
        <select
          id="city"
          v-model="selectedCity"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="Paris">Paris</option>
          <option value="New York">New York</option>
          <option value="Saguenay">Saguenay</option>
        </select>
      </div>
      <div class="mt-4">
        <button @click="fetchWeatherData" class="px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Get Weather</button>
      </div>
      <div v-if="weatherData" class="mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 class="text-lg font-semibold text-gray-900 dark:text-white">Weather in {{ selectedCity }}</h5>
      <div class="mt-3 text-gray-700 dark:text-gray-300">
        <p>Temperature: {{ (weatherData.main.temp - 273.15).toFixed(2) }} °C</p>
        <p>Humidity: {{ weatherData.main.humidity }}%</p>
        <p>Weather: {{ weatherData.weather[0].description }}</p>
      </div>
    </div>
    </div>
</template>