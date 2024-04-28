<script setup>
import Button from '../../Components/Button.vue';
defineProps(["sidebarOpen"]);
</script>

<template>
  <aside aria-label="side bar" aria-orientation="vertical">
    <!-- Sidebar backdrop for mobile only -->
    <div class="fixed inset-0 bg-slate-900 bg-opacity-30 z-40 left-0 top-0 lg:hidden lg:z-auto transition-opacity duration-200"  :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'" aria-hidden="true" ></div>
    <!-- Sidebar -->
    <div id="sidebar" ref="sidebar" class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out" :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'">
        <!-- Sidebar header section for logo and toggle button -->
        <div class="flex justify-between mb-10 pr-3 sm:px-2">
            <!-- Sidebar toggle button -->
        </div>
    </div>
  </aside>
</template>
