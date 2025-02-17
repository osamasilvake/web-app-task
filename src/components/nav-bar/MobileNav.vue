<script setup lang="ts">
import Button from "../common/Button.vue";
import { navLinks } from "./NavBar.list.ts";

defineProps<{ isMobileMenuOpen: boolean }>();

const emit = defineEmits(["close"]);
</script>

<template>
  <div
    v-if="isMobileMenuOpen"
    class="lg:hidden flex flex-col space-y-4 mt-4 px-2"
  >
    <ul class="space-y-2">
      <li v-for="link in navLinks" :key="link.name">
        <a
          :href="link.path"
          class="block py-2 text-gray-700 hover:text-black font-semibold"
          @click="emit('close')"
        >
          {{ link.name }}
        </a>
      </li>
    </ul>
    <Button label="Login" variant="secondary" size="large" />
    <Button label="Start for free" variant="primary" size="large" />
  </div>
</template>
