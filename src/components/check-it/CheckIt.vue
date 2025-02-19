<script setup lang="ts">
import Button from "../common/Button.vue";
</script>

<template>
  <div
    class="flex flex-col-reverse items-center sm:items-start justify-between gap-16 mt-8 sm:mt-28 lg:flex-row"
  >
    <div class="sm:w-[547px] mt-4">
      <Button label="Share" variant="primary" size="small" />
      <div>
        <h2
          class="text-[#282828 ] font-[600] text-[36px] sm:text-[54px] sm:leading-[63px] pt-4 pb-2"
        >
          Share anything you’re working on.
        </h2>
        <p class="text-[#5F6980] font-[400] text-[18px] pt-6">
          Campsite has been instrumental in keeping designers aware of each
          others' work-in-progress in a way that was previously slowing us down.
          It's also one of the only channels where
        </p>
      </div>

      <div class="flex items-center gap-8 pt-12">
        <div class="flex items-center gap-2">
          <div class="bg-[#F6F6F6] rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5 12l5 5L20 7"
              />
            </svg>
          </div>
          <p class="text-[#282828] font-[400] text-[16px] leading-[26px]">
            Coded
          </p>
        </div>

        <div class="flex items-center gap-2">
          <div class="bg-[#F6F6F6] rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5 12l5 5L20 7"
              />
            </svg>
          </div>
          <p class="text-[#282828] font-[400] text-[16px] leading-[26px]">
            100% Secure
          </p>
        </div>
      </div>

      <div class="flex items-center gap-2 pt-10">
        <img src="../../../src/assets/images/check-it/checklogo.svg" alt="" />
        <h3 class="font-[600]">See how it works</h3>
      </div>
    </div>

    <div class="bg-[#FAFAFA] sm:w-[656px] min-w-[300px] rounded-[24px]">
      <img
        class="w-[500p] mx-auto mt-4"
        src="../../assets//images/check-it/Frame.png"
        alt="check-it"
      />
    </div>
  </div>
</template>
