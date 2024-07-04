import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/supabase',
    '@vite-pwa/nuxt',
    "vue3-carousel-nuxt",
    '@nuxtjs/device'
  ],
  runtimeConfig:{
    public:{
      bucketUrl: process.env.BUCKET_URL,
    }
  },
  colorMode: {
    preference: 'dark',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  device: {
    refreshOnResize: true
  }
})