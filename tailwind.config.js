/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '320px': '320px',
        '390px': '390px',
        '120px': '120px',
      },
      padding: {
        '120px' : '120px',
      },
      height: {
        'Sheader': '750px',
      }
    },
  },
  plugins: [],
}

