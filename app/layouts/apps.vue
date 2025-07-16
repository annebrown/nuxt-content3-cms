<!-- @/app/layouts/apps.vue -->
<template><div><!-- Layout (Single Root Element) -->

    <!-- Midships -->
    <div class="">

        <!-- Hold -->
        <div class="">

            <!-- Title -->
            <h1 class="py-5 text-4xl font-extrabold text-center">
                {{ page.name }}
            </h1>

            <!-- Description -->
            <h2 class="py-5 text-md font-extrabold text-center">
                URL: {{ page.url }}
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
    const { data: page } = await useAsyncData(route.path, () => { return queryCollection('sites').path(route.path).first() })
</script>