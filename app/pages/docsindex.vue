<template><div>
    <h1>Docs</h1>
    <h2>Menu</h2>
    <ul>
        <li v-for="page in pages" :key="page.id">
            <NuxtLink :to="page.path">{{ page.title }}</NuxtLink>
        </li>
    </ul>
</div></template>

<script setup lang="ts">
definePageMeta({
    layout: 'docs',
})
const route = useRoute()
    const { data: pages } = await useAsyncData('docs', () => queryCollection('docs').all())
</script>