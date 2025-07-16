<!-- @/app/layouts/default.vue -->
<template><div><!-- Layout (Single Root Element) -->

    <!-- Midships -->
    <div class="">

      <!-- Hold -->
      <div class="">

        <!-- Title -->
        <h1 class="py-5 text-4xl font-extrabold text-center">
            Default Layout - Title: {{ title }}
        </h1>

                <!-- Title -->
        <h2 class="py-5 text-md font-extrabold text-center">
            {{ description }}
        </h2>

        <!-- Remaining Cargo -->
        <main>
          <slot class="" />
        </main>

      </div><!-- Hold -->

  </div><!-- Midships -->

</div></template>

<script setup>
    const route = useRoute();

    // Access Page Meta set by definePageMeta
    const title = computed(() => route.meta.title || "Error");
</script>