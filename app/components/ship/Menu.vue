<!-- @/app/components/ship/Menu.vue -->
<template><div>

    <!-- Menu -->
    <nav class="inline-block mx-2 pt-1">

        <ULink to="/">Home&nbsp;&nbsp;</ULink>
        <!-- <ULink to="/appsindex">&nbsp;Apps&nbsp;&nbsp;</ULink>  -->
        <ULink to="/blogsindex">&nbsp;Blog&nbsp;&nbsp;</ULink> 
        <ULink to="/docsindex">&nbsp;Docs&nbsp;&nbsp;</ULink>
        <ULink to="/about">&nbsp;About&nbsp;&nbsp;</ULink>

        <FleetColorModeToggle class="inline-block mt-1.5 mr-1 mb-1 ml-1 text-(--ui-primary) text-xs" />

    </nav><!-- Menu -->

</div></template>