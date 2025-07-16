<template><div>
    <NuxtLayout name="splash">    
        <!-- Description -->
        <p class="mt-8 mb-0 pb-0 pl-4">
            {{ pageDescription }}
        </p>

        <hr class="mt-0 mb-10 pt-0 ab-hr">
    </NuxtLayout>
</div></template>

<script setup lang='ts'>
    const pageTitle = 'nuxt-content3-cms'
    const pageDescription = '@Nuxt/Content3 CMS - Template'
    definePageMeta({ 
        title: pageTitle, 
        description: pageDescription,
        layout: 'splash'
    })
</script>