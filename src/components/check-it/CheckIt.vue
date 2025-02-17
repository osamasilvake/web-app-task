<script setup lang="ts">
import Button from "../common/Button.vue";
</script>

<template>
  <div
    class="flex flex-col-reverse items-center sm:items-start justify-between gap-14 mt-8 sm:mt-20 lg:flex-row"
  >
    <div class="sm:w-[600px]">
      <Button label="Share" variant="primary" size="small" />
      <div>
        <h2
          class="text-[#282828 ] font-[600] text-[36px] sm:text-[54px] sm:leading-[63px] pt-4"
        >
          Share anything you’re working on.
        </h2>
        <p class="text-[#5F6980] font-[400] text-[18px] pt-6">
          Campsite has been instrumental in keeping designers aware of each
          others' work-in-progress in a way that was previously slowing us down.
          It's also one of the only channels where
        </p>
      </div>
    </div>

    <div class="bg-[#FAFAFA] sm:w-[600px] min-w-[400px] rounded-md">
      <img
        class="w-[500px] sm:w-[560px] h-[337px] mx-auto mt-4"
        src="../../assets//images/check-it/Frame.png"
        alt="check-it"
      />
    </div>
  </div>
</template>
