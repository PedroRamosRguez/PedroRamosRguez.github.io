var shinkRay = require('shrink-ray-current');
var glob = require('glob');
var path = require('path');

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
  '/projects': 'portfolio/projects/*.json'
});


module.exports = {
  /*
  ** Headers of the page
  */


  head: {
    htmlAttrs:{
      lang:'es-en'
    },
    title: 'pedroramosrguez',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'website for Pedro Ramos' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css', integrity: 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay', crossorigin: 'anonymous'}
    ],
    script:[
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js', type: 'text/javascript', body: true }
    ],
  },
  plugins: [{ src: '~plugins/vue-carousel', ssr: false }],
  render: {
    compressor: shinkRay()
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Route config for pre-rendering
  */
  generate: {
    routes: dynamicRoutes
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
