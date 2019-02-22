const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cameron Sexton - Software Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cameron Sexton - Software Developer' },
      { property: 'og:image', content: 'https://ctsexton.github.io/inspired_preview.jpg'},
      { property: 'og:type', content: 'article'},
      { property: 'og:title', content: 'Cameron Sexton - Software Developer'},
      { property: 'og:description', content: 'Cameron Sexton is a Full Stack Developer and Data Analyst based in Los Angeles, CA.'},
      { property: 'og:url', content: 'https://ctsexton.github.io'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,700' }
    ]
  },
  plugins: [
    '~/plugins/vuetify.js',
    '~plugins/vue-scrollto.js',
    '~plugins/vue-fragment',
    '~plugins/vue-breakpoint.js'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  css: ['~/assets/style/app.styl'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^vuetify/],
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    extractCSS: true,
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
      config.module.rules.push({
        test: /\.md$/,
        use: ['json-loader', 'yaml-frontmatter-loader']
      })
    }
  }
}
