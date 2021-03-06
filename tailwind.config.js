const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    fontFamily: {
      sans: [
        'League Spartan',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Junction',
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              h1: {
                color: theme('colors.red.600'),
                fontFamily: 'League Spartan',
                fontWeight: 700,
              },
              h2: {
                color: theme('colors.purple.600'),
                fontFamily: 'League Spartan',
                fontWeight: 700,
              },
              h3: {
                color: theme('colors.yellow.700'),
                fontFamily: 'League Spartan',
                fontWeight: 500,
              },
              p: {
                color: theme('colors.gray.800'),
                fontFamily: 'Junction',
                fontWeight: 300,
              },
              li: {
                color: theme('colors.gray.800'),
                lineHeight: '1.5rem',
              },
              a: {
                color: theme('colors.gray.800'),
              },
            },
          ],
        },
        dark: {
          css: [
            {
              h1: {
                color: theme('colors.red.500'),
                fontFamily: 'League Spartan',
                fontWeight: 700,
              },
              h2: {
                color: theme('colors.purple.400'),
                fontFamily: 'League Spartan',
                fontWeight: 700,
              },
              h3: {
                color: theme('colors.yellow.500'),
                fontFamily: 'League Spartan',
                fontWeight: 500,
              },
              p: {
                color: theme('colors.gray.300'),
                fontFamily: 'Junction',
                fontWeight: 300,
              },
              li: {
                color: theme('colors.gray.300'),
              },
              a: {
                color: theme('colors.gray.300'),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      opacity: ['dark'],
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
