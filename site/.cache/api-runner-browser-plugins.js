module.exports = [{
      plugin: require('../../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":["G-S88CFV5BYH"],"pluginConfig":{"head":true,"respectDNT":false,"exclude":[],"origin":"https://www.googletagmanager.com","delayOnRouteUpdate":0},"gtagConfig":{}},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":1360,"withWebp":false,"showCaptions":false,"quality":100,"disableBgImageOnAlpha":false,"wrapperStyle":"margin: 7vw 0;","linkImagesToOriginal":true,"markdownCaptions":false,"backgroundColor":"white","withAvif":false,"loading":"lazy","decoding":"async","disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Holo - Gatsby Starter Theme","short_name":"Holo","start_url":"/","background_color":"#ebebfa","theme_color":"#ebebfa","display":"standalone","icon":"src/images/3D-liquid-abstract-5.webp","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"5cf89a603a9e4cedf10df2f6c7bd891e"},
    },{
      plugin: require('../node_modules/gatsby-plugin-gatsby-cloud/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
