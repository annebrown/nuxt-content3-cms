<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('apps').path('/apps/' + (route.params.slug ? route.params.slug.join('/') : '')).first()
})
</script>

<template>
  <NuxtLayout name="apps">
    <div>
        <ContentRenderer v-if="page" :value="page" />
        <div v-else>Page not found</div>
    </div>
  </NuxtLayout>
</template>