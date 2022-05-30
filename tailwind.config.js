const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./app/ui/**/*.{js,jsx,ts,tsx}', './client/*.html'],
  darkMode: 'class',
  theme: {
  extend: {
    outlineOffset: {
      3: '3px',
    },
    animation: {
      blob: 'blob 7s infinite',
    },
    keyframes: {
      blob: {
        '0%': {
          transform: 'translate(0px, 0px) scale(1)',
        },
        '33%': {
          transform: 'translate(30px, -50px) scale(1.1)',
        },
        '66%': {
          transform: 'translate(-20px, 20px) scale(0.9)',
        },
        '100%': {
          transform: 'tranlate(0px, 0px) scale(1)',
        },
      },
    },
    opacity: {
      67: '.67',
      80: '.80',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      128: '32rem',
      144: '36rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      darkBlue: 'hsl(217, 28%, 15%)',
      darkBlue1: 'hsl(218, 28%, 13%)',
      darkBlue2: 'hsl(216, 53%, 9%)',
      darkBlue3: 'hsl(219, 30%, 18%)',
      accentCyan: 'hsl(176, 68%, 64%)',
      accentBlue: 'hsl(198, 60%, 50%)',
      lightRed: 'hsl(0, 100%, 63%)',
      cyan: {
        50: '#ECFEFF',
        100: '#CFFAFE',
        200: '#A5F3FC',
        300: '#67E8F9',
        400: '#22D3EE',
        500: '#06B6D4',
        600: '#0891B2',
        700: '#0E7490',
        800: '#155E75',
        900: '#164E63',
      },
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },

      white: '#ffffff',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      'gray-dark': '#273444',
      'gray-light': '#d3dce6',
      black: "#212b36",
      dark: "#090E34",
      "dark-700": "#090e34b3",
      primary: "#06B6D4",
      secondary: "#13C296",
        300: '#D1D5DB',
      "body-color": '#E5E7EB',
      warning: "#FBBF24",
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
    },
backgroundImage: (theme) => ({
  'logo-dark-mode': "url('../images/logo-dark-mode.svg')",
  'logo-light-mode': "url('../images/logo-light-mode.svg')",
  'curvy-dark-mode': "url('../images/bg-curvy-dark-mode.svg')",
  'curvy-light-mode': "url('../images/bg-curvy-light-mode.svg')",
}),
},
},
variants: {
extend: {
backgroundImage: ['dark'],
},
},
plugins: [
  // @ts-ignore
  plugin(function ({ addVariant }) {
    // Add a `third` variant, ie. `third:pb-0`
    addVariant('third', '&:nth-child(3)');
  }),

  // eslint-disable-next-line global-require
  require('@tailwindcss/forms')({

  }),
],
};