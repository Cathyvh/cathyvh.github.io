module.exports = {
  pwa: {
    manifestOptions: {
      //background_color: 'black'
    },
        icons: [
            {
                'src': 'icons/android-chrome-192x192.png',
                'sizes': '192x192',
                'type': 'image/png',
            },
            {
                'src': 'icons/android-chrome-512x512.png',
                'sizes': '512x512',
                'type': 'image/png',
            },
        ],
        iconPaths: {
            favicon32: 'icons/favicon-32x32.png',
            favicon16: 'icons/favicon-16x16.png',
            appleTouchIcon: 'icons/apple-touch-icon-180x180.png',
            maskIcon: 'icons/safari-pinned-tab.svg',
            msTileImage: 'icons/mstile-144x144.png',
        },

    name: 'Cathys vue project',
    themeColor: 'black',
    workboxOptions: {
      runtimeCaching: [{
        handler: 'NetworkFirst',
        options: {
          networkTimeoutSeconds: 5
        },
        urlPattern: `https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-02-03&end_date=2021-02-03&api_key=pWcOGPziboocs8YhHzsny4nvjHKHONdz3VyIPTbm`
      }]
    }
  }
}