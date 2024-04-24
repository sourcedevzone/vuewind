<script setup>
import SideBar from "../Partials/Sidebar/SideBar.vue";
import NavBar from "../Partials/Header/NavBar.vue";
</script>

<template>
    <div class="flex h-screen overflow-hidden text-gray-800 bg-white antialiased">
        <!-- View sidebar here -->
        <SideBar />
            <main class="w-full sm:w-2/3 pt-1 px-2">
                <slot />
            </main>
    </div>
</template>