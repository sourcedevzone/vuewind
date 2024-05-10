<script setup>
import { ref } from 'vue'
import Button from '../../Components/Button.vue'
const props = defineProps({
  sidebarOpen: Boolean
})

</script>

<template>
  <aside aria-label="side bar" aria-orientation="vertical">
    <div class="min-w-fit">
      <!-- Sidebar backdrop (mobile only) -->
      <div class="bg-slate-900 lg:hidden lg:z-auto duration-200 transition-opacity inset-0 pointer-events-none opacity-0 fixed"></div>
      <!-- Sidebar -->
      <div id="sidebar" class="flex 2xl:!w-64 overflow-y-auto left-auto w-64 h-dvh bg-moss-green-900 duration-200 lg:top-auto transition-in-expo static shrink-0 flex-col z-40 p-4" :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'" @click="$emit('closeSidebar')" @ ></div>
    </div>
  </aside>
</template>
