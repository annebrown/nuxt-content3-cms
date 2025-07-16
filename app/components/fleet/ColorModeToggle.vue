<!-- @/components/fleet/ColorModeToggle.vue -->
<template>
 <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
      variant="ghost"
      @click="isDark = !isDark"
      class="p-0 m-0 align-middle"
    />
    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
    const colorMode = useColorMode()

    const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set(_isDark) {
        colorMode.preference = _isDark ? 'dark' : 'light'
    }
})
</script>