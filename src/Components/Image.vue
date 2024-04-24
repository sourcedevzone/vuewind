<template>
    <img :src="source" :alt="alts" :class="classes" :id="id"  />
    <slot />
</template>

<script setup>
defineProps({
    source: {
        type: String,
        required: true
    },
    alts: {
        type: String,
        required: true
    },
    classes: {
        type: String,
        required: false
    },
    id: {
        type: String,
        required: false
    },
})
</script>