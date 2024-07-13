/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        title: 'rgb(36, 36, 36)',
        plc: 'rgb(108, 117, 125)',
      },
      container: {
        center: true,
        padding: '20px',
        screens: {
          xl: '1330px',
          l: '920px',

        }
      }
    },
  },
  plugins: [],
}