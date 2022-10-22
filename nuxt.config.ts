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
