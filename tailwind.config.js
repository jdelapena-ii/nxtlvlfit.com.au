const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindcssAspectRatio = require('tailwindcss-aspect-ratio');
const tailwindcssLineClamp = require('tailwindcss-line-clamp');
const tailwindUI = require('@tailwindcss/ui');

module.exports = {
  purge: ['./src/**/*.js'],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1], // or 1 / 1, or simply 1
      '16/9': [16, 9], // or 16 / 9
      '4/3': [4, 3], // or 4 / 3
      '3/4': [3, 4], // or 4 / 3
      '21/9': [21, 9], // or 21 / 9
    },
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
    },
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
  variants: {
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [tailwindcssAspectRatio, tailwindcssLineClamp, tailwindUI],
};
