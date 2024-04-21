<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <nav>
    <router-link :to="{ name: 'dashboard' }">
        Dashboard
      </router-link>
      <router-link :to="{ name: 'button' }">
        Buttons
      </router-link>
  </nav>
  <RouterView />
</template>