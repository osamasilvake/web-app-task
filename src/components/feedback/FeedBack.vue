<script setup lang="ts">
import Button from "../common/Button.vue";
</script>

<template>
  <div class="mt-40 flex flex-col lg:flex-row sm:gap-20">
    <div class="bg-[#FAFAFA] sm:w-[656px] min-w-[300px] rounded-[24px]">
      <img
        class="w-[358px] mx-auto mt-4"
        src="../../assets//images/feed-back/Frame (16).svg"
        alt="check-it"
      />
    </div>

    <div class="sm:w-[547px] mt-4">
      <Button label="Feedback" variant="primary" size="small" />
      <div>
        <h2
          class="text-[#282828 ] font-[600] text-[36px] sm:text-[54px] sm:leading-[63px] pt-4 pb-2"
        >
          Better feedback at the right time.
        </h2>
        <p class="text-[#5F6980] font-[400] text-[18px] pt-6">
          Campsite has been instrumental in keeping designers aware of each
          others' work-in-progress in a way that was previously slowing us down.
          It's also one of the only channels where.
        </p>
      </div>

      <div class="flex items-center gap-2 pt-10">
        <img src="../../../src/assets/images/check-it/checklogo.svg" alt="" />
        <h3 class="font-[600]">See how it works</h3>
      </div>
    </div>
  </div>
</template>
