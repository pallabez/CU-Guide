<template>
    <v-card class="mx-auto">
        <v-img :src='website.image' height="200px" cover gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"></v-img>

        <v-card-title>
            {{ website.title }}
        </v-card-title>

        <v-card-subtitle>
            {{ website.description }}
        </v-card-subtitle>

        <v-card-actions>
            <v-btn color="primary" variant="text" :href="website.link" target="_blank">
                Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show" color="primary"></v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                    <ul class='subpoints'>
                        <li v-for="point in website.subpoints">{{ point }}</li>
                    </ul>
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
    props: ['website']
  }
</script>

<style scoped>
.subpoints {
    list-style-type: none;
}
</style>