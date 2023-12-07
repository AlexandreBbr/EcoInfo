<template>
 <section class="bg-black dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 pt-8 mx-auto text-center lg:pt-16 lg:px-12 animate-fade-down animate-once animate-duration-[10000ms] animate-delay-[10ms]">
            <h1
                class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
                Le changement climatique est une réalité qui n'est plus à démontrer</h1>
            <p class="mb-8 font-light text-white md:text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at
                Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and
                drive economic growth.</p>
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                
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