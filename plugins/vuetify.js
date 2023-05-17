import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const cuTheme = {
  dark: false,
  colors: {
    background: '#eee',
    surface: '#FFFFFF',
    primary: '#ce3d3d',
    'primary-darken-1': '#922b2b',
    'primary-light-1': '#d7adad',
    secondary: '#e20665',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    theme: {
      defaultTheme: 'cuTheme',
      themes: {
        cuTheme
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
