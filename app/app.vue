<template><div>
    <NuxtRouteAnnouncer /><!-- A11y -->

    <UApp>

        <!-- Water -->
        <UContainer class="w-fit my-0 sm:my-1 md:my-2 mx-auto p-0 bg-(--ab-water)">

                <!-- Ship -->
                <UCard
                    variant="subtle"
                    class="relative w-fit min-w-md max-w-4xl mx-auto p-0 divide-none ring-transparent bg-(--ab-ship)"
                    :ui="{ 
                        root: 'relative m-0 p-0',
                        header: 'sticky m-0 mx-4 pb-0 px-2 sm:px-3 rounded-lg bg-(--ab-bow)', 
                        body: 'my-0 mx-4 p-0 rounded-t-lg bg-(--ab-midships) ring-none',
                        footer: 'm-0 mx-4 p-0 pr-2 sm:pr-3 pl-3 sm:pl-4 pb-2 rounded-b-lg bg-(--ab-transom)'
                    }"
                >

                <!-- Logo -->
                <div class="z-9999 absolute top-3 left-6.5">
                    <ULink to='/'>
                            <ImgLogo class="w-14" />
                    </ULink>
                </div>
             
                <!-- Bow -->
                <template #header>
                    <ShipBow class="text-sm" />
                </template>

                <!-- Midships -->
                <NuxtPage class="p-0" />

                <!-- Transom -->
                <template #footer>
                    <ShipTransom />
                </template>

            </UCard><!-- Ship -->
        </UContainer><!-- Water -->
    </UApp>
</div></template>