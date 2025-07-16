<script lang="ts" setup>
    const route = useRoute()
    const { data: page } = await useAsyncData(route.path, () => { return queryCollection('docs').path(route.path).first() })
</script>

<template>
    <NuxtLayout name="docs">
        <div>
            <div v-if="page">
                <h1>{{ page.title }}</h1>
                <h2>{{ page.description }}</h2>
                <ContentRenderer :value="page" />
            </div>
            <div v-else>Page not found</div>
        </div>
    </NuxtLayout>
</template>