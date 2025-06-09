// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts'
  ],

  css: ['~/assets/css/main.css'],

  ui: {

    colorMode: false,
    
    theme: {
      colors: [
        'primary',
        'secondary',
        'accent', //Custom color added
        'info',
        'success',
        'warning',
        'error',
        'neutral'
      ]
    }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27'
})