<template>
    <v-app id="inspire">
        <!-- <v-system-bar>
            <v-spacer></v-spacer>

            <v-icon>mdi-square</v-icon>

            <v-icon>mdi-circle</v-icon>

            <v-icon>mdi-triangle</v-icon>
        </v-system-bar> -->

        <app-side-bar />

        <v-main>
            <v-container class="py-8 px-6" fluid>
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