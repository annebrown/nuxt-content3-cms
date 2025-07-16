<template><div>
    <h1>Apps</h1>
    <h2>Menu</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        App: <NuxtLink :to="post.path">{{ post.name }}</NuxtLink>
      </li>
    </ul>
</div></template>

<script setup lang="ts">
    const { data: posts } = await useAsyncData('apps', () => queryCollection('apps').all())
</script>