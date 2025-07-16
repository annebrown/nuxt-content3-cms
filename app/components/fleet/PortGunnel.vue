<!-- @/app/components/fleet/PortGunnel.vue -->
<template><div>

    <!-- Gunnel Header -->
    <div>

        <!-- Sidebar Title -->
        <span class="text-(--ui-secondary)">
            Docs&nbsp;
        </span>

        <!--Sidebar Expand/Collapse Toggle-->
        <UButton
            :icon="isPortVisible ? 'solar:eye-linear' : 'solar:eye-closed-linear'"
            variant="ghost"
            @click="togglePortVisibility"
            class="inline-block align-middle p-0 w-5 h-5 stroke-(--ui-primary) "
        />

    </div><!-- Gunnel Header -->

    <!-- Gunnel Content -->
    <div>
        <!-- Source Header -->
        <div v-if="isPortVisible">
            <span class="text-(--ui-secondary)">
                App Docs
            </span>

            <!--Source Expand/Collapse Toggle-->
            <UButton
                :icon="isDocsVisible ? 'solar:eye-linear' : 'solar:eye-closed-linear'"
                variant="ghost"
                @click="toggleDocsVisibility"
                class="inline-block align-middle p-0 w-5 h-5 stroke-(--ui-primary) "
            />
        </div>
        <!-- Source Header -->

        <!-- Source Content -->
        <div v-if="isDocsVisible">
           <p class="ml-2 pr-2 !text-xs">Navi goes here</p>
        </div>

    </div>
    <!-- Gunnel Content -->

</div></template>

<script setup lang="ts">

    import { ref } from 'vue'

    const props = defineProps<{
        pageData?: { title: string; description: string; [key: string]: any } | null;
    }>();

    // Show/Hide Port Gunnel
    const isPortVisible = ref(true)
    const togglePortVisibility = () => {
        isPortVisible.value = !isPortVisible.value
    }
    const isDocsVisible = ref(true)
    const toggleDocsVisibility = () => {
        isDocsVisible.value = !isDocsVisible.value
    }
</script>