import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        // Need to transpile otherwise SSR fails.
        transpile: [/bootstrap-vue-3/],
    },
    typescript: {
        shim: false
    },
    css: [
        'bootstrap/dist/css/bootstrap.min.css',
        "bootstrap-vue-3/dist/bootstrap-vue-3.css",
    ],
})
