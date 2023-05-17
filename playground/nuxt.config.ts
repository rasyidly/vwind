export default defineNuxtConfig({
  modules: [
    '../src/module',
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '../src/runtime/presets/vwind.css'
  },
  vwind: {}
})
