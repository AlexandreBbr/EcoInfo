<template>
 <section class="bg-black dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 pt-8 mx-auto text-center lg:pt-16 lg:px-12 animate-fade-down animate-once animate-duration-[10000ms] animate-delay-[10ms]">
            <h1
                class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
                We invest in the world’s potential</h1>
            <p class="mb-8 font-light text-white md:text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at
                Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and
                drive economic growth.</p>
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#"
                    class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-500 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Pricing & FAQ
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
            <img class="mx-auto mb-5 lg:mb-8 border border-gray-200 rounded-lg shadow-xl dark:border-gray-600 z-1 dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup.svg"
                alt="dashboard overview">
            <img class="mx-auto mb-5 lg:mb-8 border border-gray-200 rounded-lg shadow-xl dark:border-gray-600 hidden dark:block z-1"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup-dark.svg"
                alt="dashboard overview dark">
        </div>
        <div class="pt-48 lg:pb-16 pb-8 -mt-48 bg-black sm:pt-80 sm:-mt-80 dark:bg-gray-800 z-2">
            <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                <!-- PLACER SLIDER ICI -->
            </div>
        </div>
    </section>
</template>

<script>
    export default{
        name: "Hero"
    }
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>