<template>
    <div>
        <Navbar></Navbar>
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <div>
                        <canvas ref="tetrisCanvas" id="tetris"></canvas>
                    </div>
                    <img class="mx-auto mb-4"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
                        alt="404 Not Found" />
                    <h1 class="mb-4 text-2xl font-extrabold text-primary-600 dark:text-primary-500">
                        404 Not Found
                    </h1>
                    <p class="mb-10 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                        Whoops! That page doesn’t exist.
                    </p>
                    <div id="tetris" class="mb-4"></div>
                    <p class="mb-4 text-gray-500 dark:text-gray-400">Here are some helpful links instead:</p>
                    <ul class="flex justify-center items-center space-x-4 text-gray-500 dark:text-gray-400">
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
import Navbar from './Items/Navbar.vue';
import Tetris from './tetris.js';

export default {
    name: 'NotFoundPage',
    mounted() {
        this.tetris = new Tetris(this.$refs.tetrisCanvas, this.$refs.tetrisCanvas.getContext('2d'));
    },
    components: { Navbar }
};
</script>
  