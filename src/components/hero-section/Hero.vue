<script setup lang="ts">
import Button from "../common/Button.vue";
// import {  } from "../../assets/vue.svg";

// import { ref } from "vue";

// const icons = ref([
//   { src: "../../assets/images/Union.svg", position: "top: 10%; left: 20%;" },
//   { src: "/icon2.png", position: "top: 5%; left: 50%;" },
//   { src: "/icon3.png", position: "top: 10%; right: 20%;" },
//   { src: "/icon4.png", position: "bottom: 10%; left: 20%;" },
//   { src: "/icon5.png", position: "bottom: 5%; left: 50%;" },
//   { src: "/icon6.png", position: "bottom: 10%; right: 20%;" },
// ]);
</script>

<template>
  <div
    class="flex flex-col sm:items-center justify-start sm:justify-center space-y-4 text-center mt-8 sm:mt-40"
  >
    <h1
      class="text-[34px] sm:text-[64px] lg:text-[84px] leading-[40px] sm:leading-[89px] font-[600]"
    >
      Create,inspect,and apply synthetic surveillance broadly.
    </h1>
    <p class="text-[#5F5F5F] font-[400] text-[20px]">
      Start with a stunning homepage. Stay motivated without hurting your
      pocket.
    </p>
    <div class="py-8 sm:py-4">
      <Button label="Start for free" variant="primary" size="large" />
    </div>
    <div class="flex items-center justify-center space-x-2 hidden sm:flex">
      <p class="text-[#A3A3A3] text=[14px] font-[600]">
        Want to talk or get a live demo?
      </p>
      <a href="#" class="text-[#525252] text=[14px] font-[600]">
        Get in touch →
      </a>
    </div>
  </div>

  <!-- Central Vector Image -->
  <div class="">
    <!-- <img
      src="../../assets/images/hero/Frame (7).svg"
      alt="Vector Background"
      class="w-[100%] h-[100%] sm:w-[100%] sm:h-[100%]"
    /> -->
  </div>
</template>
