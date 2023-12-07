// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'in-out'
    }
  },
  css: [ '~/assets/css/main.css' ],
  postcss: {
    plugins: {
      tailwindcss: {
      },
      autoprefixer: {
      }
    }
  },
  // components: {
  //   dirs: []
  // },
  modules: [ '@nuxtjs/google-fonts' ],
  googleFonts: {
    download: true,
    outputDir: 'assets',
    overwriting: false, // set true if font families changed
    display: 'swap',
    families: {
      'Plus+Jakarta+Sans': {
        wght: [
          300, 400, 500, 600, 700, 800
        ]
      }
    }
  }
});
