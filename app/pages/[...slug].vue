<!--------@/pages/[...slug].vue------------------------------------------------>
<template>
  <!-- No div - breaks route-->
  <NuxtLayout name="default">
    <div>
        <ContentRenderer v-if="page" :value="page" />
        <div v-else>Loading...</div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const route = useRoute()
    const { data: page } = await useAsyncData(route.path, () => { return queryCollection('docs').path(route.path).first() })
</script>
