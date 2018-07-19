let meta = {
  title: 'ERC721 Validator',
  description: 'Validates ERC721 smart contracts and tokens'
}

module.exports = {
  head: {
    title: meta.title,
    meta: [
      { charset: "utf-8" },
      { hid: "title", property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { hid: "twitterTitle", property: "twitter:title", content: meta.title },
      { property: "twitter:description", content: meta.description },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: meta.description }
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    script: [
      {src : "https://platform.twitter.com/widgets.js"}
      // {src: "https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"}
    ]
  },
  css: [
    { src: "~/assets/scss/styles.scss" }
  ],
  sassResources: [
    '@/assets/scss/_config.scss'
  ],
  loading: {
    color: "#0971FF"
  },
  modules: [
    '@nuxtjs/axios',
    'nuxt-sass-resources-loader'
  ],
  env: {
    API_BASE_URL: process.env.API_BASE_URL || 'https://api-staging.0xcert.org'
  },
  axios: {
    baseURL: process.env.API_BASE_URL
  },
  build: {
    vendor: [
      'axios'
    ],
  }
}