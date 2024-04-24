<script setup>
defineProps({
    classes: {
        type: String,
        default: "inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-gray-100 dark:border-slate-800 ring-gray-200 dark:ring-gray-500 bg-gray-100 text-black dark:bg-slate-800 dark:text-white hover:bg-gray-200 hover:dark:bg-slate-700 py-2 px-3 mr-3 last:mr-0 mb-3"
    },
    id: {
        type: String,
        default: null
    },
    label: {
        type: [String, Number],
        required: false,
        default: null
    },
     icon: {
        type: String,
        required: false,
        default: null
     }
})
</script>

<template>
    <button
    :class="classes"
    :id="id"
    >
        <slot />
    </button>
</template>