<template>
  <div>
    <Navbar></Navbar>

    <section>
      <HeaderFound></HeaderFound>
    </section>

  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease, transform 1s ease-in-out;
  transform: translateY(0px);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>

<script>
import { Transition } from "vue";
import Navbar from './Items/Navbar.vue';
import TeamCarousel from './Items/TeamCarousel.vue';
import Features from './Items/Features.vue';
import Hero from './Items/Hero.vue';
import Header from "./Items/Header.vue";
import HeaderFound from "./Items/HeaderFound.vue";



export default {
  name: 'LandingPage',
  props: {
    msg: String
  },
  components: { Navbar, TeamCarousel, Features, Hero, Header, HeaderFound, },
}
</script>