/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#060606',
        light: '#F7f7f7',
        'light-blue': '#82A6F8',
        'dark-blue': '#39355A',
        pink: '#C5BCBE',
        brown: '#944A66',
      },
    },
  },
  plugins: [],
};
