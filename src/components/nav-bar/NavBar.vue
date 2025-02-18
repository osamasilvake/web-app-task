<script setup lang="ts">
import { ref } from "vue";
import Button from "../common/Button.vue";
import { navLinks } from "./NavBar.list.ts";
import MobileNav from "../nav-bar/MobileNav.vue";

const isMobileMenuOpen = ref<boolean>(false);
</script>

<template>
  <nav class="">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-6">
        <div class="w-40">
          <img
            src="/src/assets/images/Union.svg"
            alt="Cloudhub Logo"
            class="h-6"
          />
        </div>

        <!-- Desktop Navigation -->
        <ul class="hidden lg:flex items-center space-x-10 text-gray-700">
          <li class="relative">
            <div class="flex items-center">
              <select
                class="bg-transparent font-semibold text-gray-700 hover:text-black focus:outline-none appearance-none pr-5 pl-2 py-2"
              >
                <option>Product</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute right-2 top-1/2 w-4 h-4 text-black transform -translate-y-1/2 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </li>
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.path" class="hover:text-black font-semibold">{{
              link.name
            }}</a>
          </li>
        </ul>
      </div>

      <div class="hidden lg:flex items-center">
        <Button label="Login" variant="secondary" size="large" />

        <Button label="Start for free" variant="primary" size="large" />
      </div>

      <!-- Mobile Menu Toggle -->
      <Button
        class="lg:hidden text-gray-700 bg-white"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        :icon="{
          open: 'M4 6h16M4 12h16m-7 6h7',
          close: 'M6 18L18 6M6 6l12 12',
        }"
        :toggleState="isMobileMenuOpen"
      />
    </div>

    <!-- Mobile Menu -->
    <MobileNav
      :isMobileMenuOpen="isMobileMenuOpen"
      @close="isMobileMenuOpen = false"
    />
  </nav>
</template>
