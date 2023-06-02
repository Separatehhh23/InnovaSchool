/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
          primary: '#202225',
          secondary: '#5865f2',
          gray: colors.trueGray,
          gray: {
            900: '#202225',
            800: '#2f3136',
            700: '#36393f',
            600: '#4f545c',
            400: '#d4d7dc',
            300: '#e3e5e8',
            200: '#ebedef',
            100: '#f2f3f5',
          },
      },
    },
  },
  plugins: [],
}
