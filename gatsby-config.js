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
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.nxtlvlfit.com.au',
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
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
      },
    },
  ],
};
