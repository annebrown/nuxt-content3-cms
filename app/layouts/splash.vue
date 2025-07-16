<template><div><!-- Layout (Single Root Element) -->

    <!-- Midships -->
    <div class="">

        <!-- Hold -->
        <div class="">
            
            <!-- Title -->
            <h1 class="py-5 text-4xl font-extrabold text-center text-(--ui-secondary)">
                {{ title }}
            </h1>

            <!-- Remaining Cargo -->
            <main>
                <slot class="" />
            </main>

        </div><!-- Hold -->

    </div><!-- Midships -->

</div></template>

<script setup>
    const route = useRoute()
    const title = computed(() => route.meta.title || "Error")
</script>