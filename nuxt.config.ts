import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
    ],
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js")
        },
        transpile: ['gsap']
    },
    css: [
        '@/assets/css/main.css',
    ],
    head: {
        bodyAttrs: {
            style: 'overflow-y:scroll'
        }
    }
})
