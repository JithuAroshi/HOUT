/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#FFF',
        'secondary-color': '#9DB97B',
        'pic-background-color': 'rgb(247,248,250)',
        'h4-text-color': '#CAC8CE',
        'h1-text-color': '#79848a'
      },
    },
  },
  plugins: [],
}


