/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['UkrSansN', 'Open Sans', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#124EAD',
        'primary-blue-light': '#0062FF',
        'primary-yellow': '#FFD500',
      },
    },
  },
  plugins: [],
};
