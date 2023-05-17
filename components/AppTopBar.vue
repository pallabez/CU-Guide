<template>
    <v-app-bar :elevation="2" color="primary">
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-spacer></v-spacer>

        
        <v-tooltip text="Search" location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </template>
        </v-tooltip>

        <v-tooltip text="Rate Us!" location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
            </template>
        </v-tooltip>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
    })
}
</script>