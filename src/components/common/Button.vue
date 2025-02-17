<script setup lang="ts">
defineProps<{
  label?: string;
  variant?: "primary" | "secondary" | "danger" | "success";
  icon?: { open: string; close: string };
  toggleState?: boolean;
  size?: "small" | "medium" | "large";
}>();
</script>

<template>
  <button
    :class="[
      'rounded-full font-semibold transition flex items-center justify-center',

      variant === 'primary'
        ? 'bg-[#FF591E] text-white hover:bg-orange-600'
        : variant === 'secondary'
        ? ' text-black'
        : variant === 'danger'
        ? 'bg-red-500 text-white hover:bg-red-600'
        : variant === 'success'
        ? ''
        : ' text-black',

      size === 'small'
        ? 'px-4 py-2 text-sm'
        : size === 'large'
        ? 'px-5 py-3'
        : 'px-1 py-2 text-base',
      icon ? 'p-2' : '',
    ]"
  >
    <template v-if="icon">
      <svg
        class="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          :d="toggleState ? icon.close : icon.open"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </template>
    <template v-if="label">
      {{ label }}
    </template>
  </button>
</template>
