const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');

module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.300'),
          '[class~="lead"]': {
            color: theme('colors.gray.200'),
          },
          hr: {
            borderTopColor: theme('colors.gray.800'),
          },
          strong: {
            color: theme('colors.white'),
          },
          a: {
            color: theme('colors.white'),
          },
          'h1, h2, h3, h4': {
            color: theme('colors.white'),
            fontWeight: '700',
            textTransform: 'uppercase',
          },
          'ol > li:before': {
            color: theme('colors.white'),
          },
          'ul > li:before': {
            backgroundColor: theme('colors.white'),
          },
        },
      },
    }),
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: { boxShadow: ['responsive', 'hover', 'focus', 'focus-within'] },
  plugins: [tailwindUI],
};
