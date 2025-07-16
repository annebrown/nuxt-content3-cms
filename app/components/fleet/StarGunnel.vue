<!-- @/app/components/ship/StarGunnel.vue -->
<template><div>

<!-- Starboard Gunnel -->
<div class="text-xs">

    <!-- TOC Header -->
    <div class="text-xs font-bold h-fit mb-1">

        <span 
            class="font-bold pl-1 align-middle 
                text-(--ui-secondary)"
        >
            ON THIS PAGE&nbsp;
        </span>


        <!--Show/Hide Toggle-->
        <UButton
            :icon="isStarboardVisible ? 'solar:eye-linear' : 'solar:eye-closed-linear'"
            variant="ghost"
            @click="toggleStarboardVisibility"
            class="inline-block align-middle p-0 w-5 h-5
                text-(--ui-primary)"
        />
    </div><!-- TOC Header -->

    <!-- v-if TOC -->
    <div v-if="isStarboardVisible">

        <ul v-if="page?.body?.toc?.links" class="p-2 pt-0 pb-0">

          <li v-for="link in page.body.toc.links" :key="link.text"  class="pl-2 text-xs">
                <ULink :to="`#${link.id}`">
                    {{ link.text }}
                </ULink>
            </li>

        </ul>
    </div><!-- v-if TOC -->

</div><!-- Starboard Gunnel -->

</div></template>

<script setup lang="ts">

    const route = useRoute()

    // Show/Hide Starboard Gunnel
    import { ref } from 'vue'
    const isStarboardVisible = ref(true)
    const toggleStarboardVisibility = () => {
        isStarboardVisible.value = !isStarboardVisible.value
    }

    const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})

</script>