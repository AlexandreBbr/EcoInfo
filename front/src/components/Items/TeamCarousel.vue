<template>
<!-- Block start -->
<section class="bg-black dark:bg-gray-900 ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div class="mx-auto mb-8 lg:mb-16 max-w-screen-sm md:mb-24">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Our team</h2>
                <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Watch out for the best team of the world.</p>
            </div>
            <div class="grid gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 content-center">
                <div class="text-center text-gray-500">
                    <img class="mx-auto mb-4 w-36 h-36 rounded-lg"
                        src="../../assets/john.jpg"
                        alt="Bonnie Avatar">
                    <a href="#">
                        <h5 class="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">Matteo Castelli
                        </h5>
                    </a>
                    <span>Front-End Developer</span>
                    <div class="flex justify-center mt-4 space-x-4">
                    </div>
                </div>
                <div class="text-center text-gray-500">
                    <img class="mx-auto mb-4 w-36 h-36 rounded-lg"
                        src="../../assets/hannah.jpg"
                        alt="Jese Avatar">
                    <a href="#">
                        <h5 class="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">Celian Friedrich</h5>
                    </a>
                    <span>Front-End Developer</span>
                    <div class="flex justify-center mt-4 space-x-4">
                    </div>
                </div>
                <div class="text-center text-gray-500">
                    <img class="mx-auto mb-4 w-36 h-36 rounded-lg"
                        src="../../assets/emma.jpg"
                        alt="Joseph Avatar">
                    <a href="#">
                        <h5 class="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">Remy Breton
                        </h5>
                    </a>
                    <span>Back-End Developer</span>
                    <div class="flex justify-center mt-4 space-x-4">
                    </div>
                </div>
                <div class="text-center text-gray-500">
                    <img class="mx-auto mb-4 w-36 h-36 rounded-lg"
                        src="../../assets/rock.jpg"
                        alt="Jese Avatar">
                    <a href="#">
                        <h5 class="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">Alexandre Barbier</h5>
                    </a>
                    <span>Front-End Developer</span>
                    <div class="flex justify-center mt-4 space-x-4">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            title: 'Team',
        }
    },
}
</script>