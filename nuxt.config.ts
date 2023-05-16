// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    css: [
        'vuetify/styles',
        '@mdi/font/css/materialdesignicons.css'
    ],
    build: {
        transpile: ['vuetify']
    },
    modules: [
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', config => { config.plugins?.push(vuetify()) })
        }
    ],
    vite: {
        ssr: {
            noExternal: ['vuetify']
        }
    },
})
