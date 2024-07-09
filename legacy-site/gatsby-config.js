require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const config = require('./config/website');

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

const path = require(`path`);

module.exports = {
  /* General Information */
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteTitle: config.siteTitle,
    siteTitleShort: config.siteTitleAlt,
    siteDescription: config.siteDescription,
    siteUrl: config.siteUrl + pathPrefix,
    contactEmail: config.contactEmail,
  },
  /* Plugins */
  plugins: [
    // 'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
          baseUrl: "thevoid.media/cms",
          protocol: "http",
          hostingWPCOM: false,
          //turns on/off advanced custom fields
          useACF: true,
          // Include specific ACF Option Pages that have a set post ID
          // Regardless if an ID is set, the default options route will still be retrieved
          // Must be using V3 of ACF to REST to include these routes
          // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
          // routes with the ID option_page_1 and option_page_2
          // Dashes in IDs will be converted to underscores for use in GraphQL
          acfOptionPageIds: [],
          auth: {
           // If auth.user and auth.pass are filled, then the source plugin will be allowed
           // to access endpoints that are protected with .htaccess.
           // htaccess_user: "your-htaccess-username",
           // htaccess_pass: "your-htaccess-password",
           // htaccess_sendImmediately: false,
          },
          // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: true,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://source-url.com",
        //   replacementUrl: "https://replacement-url.com",
        // },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        includedRoutes: [
          "**/*/*/categories",
          "**/*/*/posts",
          "**/*/*/pages",
          "**/*/*/media",
          "**/*/*/tags",
          "**/*/*/taxonomies",
          "**/*/*/users",
          "**/*/*/menus",
        ],
        // Blacklisted routes using glob patterns
        // excludedRoutes: ["**/*/*/posts/1456"],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: path.join(__dirname, `static`),
      },
    },
    'gatsby-transformer-sharp',
    "gatsby-plugin-react-helmet",
    'gatsby-plugin-sharp',
    'gatsby-plugin-lodash',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography.js',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'fullscreen',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    /* Must be placed at the end */
    // 'gatsby-plugin-offline',
    // 'gatsby-plugin-netlify',
  ],
};
