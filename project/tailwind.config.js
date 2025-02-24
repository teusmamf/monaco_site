/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#040404',
        accent: '#dcdcdc',
        highlight: '#0f41ea',
        secondary: '#595959',
        tertiary: '#7c7c7c',
      },
    },
  },
  plugins: [],
};