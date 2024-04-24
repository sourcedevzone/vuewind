<script setup>
import LayoutAuthenticated from '../Layouts/LayoutAuthenticated.vue';
import Image from '../Components/Image.vue';
import Button from '../Components/Button.vue';
</script>

<template>
    <LayoutAuthenticated>
        <main>
            <h1>Hello, This is dashboard</h1>
            <Button href="https://www.google.com">This is Test Button</Button>
        </main>
    </LayoutAuthenticated>
</template>