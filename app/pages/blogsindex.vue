<template><div>
    <h1>Blog</h1>
    <h2>Blog Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
</div></template>

<script setup lang="ts">
    const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())
</script>
