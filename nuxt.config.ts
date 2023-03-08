// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    telemetry: false,
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/devtools" 
      ],
      vite: { 
        server: {
            watch: {
                usePolling: true
            }
        }
    },
})
