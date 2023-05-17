<template>
    <v-app id="inspire">
        <app-side-bar />
        
        <v-main>
            <v-container class="py-8 px-6" fluid>
                <app-top-bar />
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>

<style>
:root {
    --primary-color: #ce3d3d;
    --secondary-color: #922b2b;
    --background: #ebebeb;
    --shadow: #8d8d8d;
}

body {
    background-color: var(--background);
}
</style>