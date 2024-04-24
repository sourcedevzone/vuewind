<script setup>
import LayoutAuthenticated from '../Layouts/LayoutAuthenticated.vue';
import Image from '../Components/Image.vue';
</script>

<template>
    <LayoutAuthenticated>
        <main>
            <h1>Hello, This is dashboard</h1>
            <Image source="https://picsum.photos/200/300" alts="This is test" classes="ring-8"></Image>
        </main>
    </LayoutAuthenticated>
</template>