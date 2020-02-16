const routes = () => {
  const indicators = Object.keys(JSON.parse(require('fs').readFileSync('data/indicators.json', 'utf8'))).map((data) => {
    return '/indicator/' + data
  })
  const sdgs = Object.keys(JSON.parse(require('fs').readFileSync('data/sdgs.json', 'utf8'))).map((data) => {
    return '/sdg/' + data
  })
  return [...indicators, ...sdgs]
}

module.exports = {
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      if (to.hash) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ selector: to.hash })
          }, 500)
        })
      }
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    }
  },
  modules: [
    ['nuxt-matomo', { matomoUrl: '//matomo.gerechter-welthandel.org/', siteId: 3 }],
    ['@nuxtjs/sitemap', { path: '/sitemap.xml', generate: true, hostname: 'https://www.2030watch.de', routes: routes }]
  ],
  // Page headers
  head: {
    htmlAttrs: {
      lang: 'de'
    },
    title: '2030Watch | Wie nachhaltig ist Deutschland?',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '2030Watch diskutiert wie ambitioniert Deutschland die Nachhaltigkeitsziele der Agenda 2030 umsetzt.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  css: [
    // Load a node module directly (here it's a SASS file)
    'normalize-scss',
    // CSS file in the project
    '@/assets/style/base.scss'
  ],
  generate: {
    routes: routes,
    fallback: '404.html'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['babel-polyfill'],
    analyze: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          require('webpack-node-externals')({
            whitelist: [/^vue-slick/]
          })
        ]
      }
    }
  }
}
