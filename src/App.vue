<script setup lang="ts">
import NavBar from "./components/nav-bar/NavBar.vue";
import Hero from "./components/hero-section/Hero.vue";
import Banner from "./components/banner/Banner.vue";
import CheckIt from "./components/check-it/CheckIt.vue";
import FeedBack from "./components/feedback/FeedBack.vue";
</script>

<template>
  <div class="max-w-custom-one mx-auto bg-white py-2 px-3 sm:px-4 sm:py-4">
    <NavBar />
    <Hero />
    <Banner />
    <CheckIt />
    <FeedBack />
  </div>
</template>
