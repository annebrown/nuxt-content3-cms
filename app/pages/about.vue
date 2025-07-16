<template><div>
    <NuxtLayout name="splash">

        <!-- Description -->
        <p class="m-0 mt-10 mx-2 pb-1.5 !text-lg">
            {{ pageDescription }}
        </p>

    <!-- Logo -->
    <ULink to="/">
        <NuxtImg 
            src="logo.png" 
            class="z-50 absolute top-[11em] right-[3rem] w-[5.5rem] h-auto" 
        />
    </ULink>

    <!-- Horiz Line -->
    <!-- <hr class="w-full mt-0 pt-0 ab-hr"> -->
    <hr class="mt-0 pt-0 ab-hr">

    <!-- Links -->
    <p class="mb-4 pl-4 text-sm">

        <ULink 
            to="https://nuxt-content3-cms.browndomain.com" 
            class="inline-block m-0 -mt-3 p-0 pt-2 pl-4"
        >
            Demo 
        </ULink>

        <span class="inline-block m-0 -mt-3.5 p-0 pb-1 align-top text-3xl 
            text-(--ui-secondary)">
            &nbsp;|&nbsp;
        </span>

        <ULink 
            to="https://github.com/annebrown.ca/nuxt-content3-cms" 
            class="inline-block m-0 -mt-3 p-0 pt-2 pl-4"
        >
            Code 
        </ULink>

        <span class="inline-block m-0 -mt-3.5 p-0 pb-1 align-top text-3xl 
            text-(--ui-secondary)">
            &nbsp;|&nbsp;
        </span>


        <ULink 
            to="https://annebrown.ca/meta/dash" 
            class="inline-block m-0 -mt-3 p-0 pt-2 pl-4"
        >
            Other Sites 
        </ULink>

    </p><!-- Links -->
 </NuxtLayout>
</div></template>

<script setup lang="ts">
    const pageTitle = 'About'
    const pageDescription = 'Nuxt/Content3 CMS - Template'
    definePageMeta({ 
        title: pageTitle, 
        description: pageDescription,
        layout: 'splash'
    })
</script>