<!-- layouts/default.vue -->
<template>
    <div>
        <!-- <header class="sticky top-0 z-50">
            <Navbar />
        </header> -->

        <main>
            <slot /> <!-- Page content will be rendered here -->
        </main>
    </div>
</template>

<script setup>
// No need to import NuxtPage anymore, just use <slot /> for the content
</script>

<style scoped>
/* Add your styles for the layout */
</style>