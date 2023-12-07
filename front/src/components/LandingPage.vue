<template>
  <div>
  <Navbar></Navbar>

<section>
  <Header></Header>
</section>

<section>
  <Hero></Hero>
</section>

<section>
  <Features></Features>
</section>

<section>
  <TeamCarousel></TeamCarousel>
</section>

<section>
  <PricingTable></PricingTable>
</section>

<section>
  <ContactForm></ContactForm>
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
import ContactForm from './Items/ContactForm.vue';
import PricingTable from './Items/PricingTable.vue';
import Navbar from './Items/Navbar.vue';
import TeamCarousel from './Items/TeamCarousel.vue';
import Features from './Items/Features.vue';
import Hero from './Items/Hero.vue';
import Header from "./Items/Header.vue";


export default {
    name: 'LandingPage',
    props: {
        msg: String
    },
    components: { ContactForm, PricingTable, Navbar, TeamCarousel, Features, Hero, Header }
}
</script>