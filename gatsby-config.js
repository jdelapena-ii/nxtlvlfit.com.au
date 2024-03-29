const dotenv = require('dotenv');
const postCssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const resolveConfig = require('tailwindcss/resolveConfig');

const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: 'nXtLvL Functional Movement Centre',
    description: '',
    author: '',
    siteUrl: 'https://www.nxtlvlfit.com.au',
    email: 'enquiries@nxtlvlfit.com.au',
    address: {
      street: '31 Jindalee Road',
      suburb: 'Port Macquarie',
      state: 'NSW',
      postcode: '2444',
    },
    phone: {
      rich: '0422 767 889',
      kez: '0402 322 131',
    },
    social: {
      instagram: {
        handle: '@nxtlvl_pmq',
        url: 'https://www.instagram.com/nxtlvl_pmq/',
      },
      facebook: {
        handle: '@nxtlvlpmq',
        url: 'https://www.facebook.com/nxtlvlpmq/',
      },
    },
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.nxtlvlfit.com.au',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-174020361-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        defer: false,
        // Any additional optional fields
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://nxtlvlfit.us17.list-manage.com/subscribe/post?u=ca5b6b064f586cd60687deb2e&amp;id=609586fc1b',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'nXtLvL Fitness',
        short_name: 'nXtLvL',
        start_url: '/',
        background_color: fullConfig.theme.colors.black,
        theme_color: fullConfig.theme.colors.black,
        display: 'minimal-ui',
        icon: 'src/images/favicon.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          postCssImport,
          tailwindcss(tailwindConfig),
          autoprefixer,
          ...(process.env.NODE_ENV === 'production' ? [cssnano] : []),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 90,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: 'src/data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        // a token with read permissions is required
        // if you have a private dataset
        // Set to `true` in order for drafts to replace their published version. By default, drafts will be skipped.
        // overlayDrafts: !isProd,

        // Set to `true` to keep a listener open and update with the latest changes in realtime. If you add a `token` you will get all content updates down to each keypress.
        watchMode: !isProd,

        // If the Sanity GraphQL API was deployed using '--tag <name>',
        // use 'graphqlTag' to specify the tag name. Defaults to 'default'.
        graphqlTag: 'default',

        // Authentication token for fetching data from private datasets, or when using overlayDrafts
        // token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
