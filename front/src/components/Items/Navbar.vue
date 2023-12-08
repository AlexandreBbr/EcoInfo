<template>
  <header>
      <nav class="bg-black border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <router-link to="/" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap  text-white dark:text-white">EcoInfo</span>
          </router-link>
          <div class="flex md:order-2">
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 bg-black"  id="navbar-cta">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <router-link to="/education" class="block py-2 pl-3 pr-4 text-white bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Climate Education</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </header>
  </template>
  
  <script>

      export default {
      name: 'Navbar',
      props: {
          msg: String
      }
  }
  </script>