<!-- @/app/components/ship/Bow.vue -->
<template><div>

    <!-- Menu -->
    <div class="flex flex-row">
        <span class="inline-block ml-14 mr-4 pt-4 text-xs text-(--ui-secondary)">
            .browndomain.com
        </span>

        <!-- Spacer -->
        <div class="grow">&nbsp;</div>

        <!-- Menu -->
        <div class="relative overflow-hidden">

            <ShipMenu class="-mb-2 pb-1 card-glass-narrow !rounded-b-none" />
        </div>
    </div><!-- Menu -->

</div></template>
<script setup lang="ts">
    import { useRoute } from 'vue-router'
    const route = useRoute()

    const isActive = () => {
        return route.path === path
    }
</script>