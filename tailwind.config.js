const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      keyframes: {
        ring: {
         "0%":{transform:'rotate(0deg)',boxShadow:"1px 5px 2px #e65c00"},
         "50%":{transform:'rotate(180deg)',boxShadow:"1px 5px 2px #18b201"},
         "100%":{transform:'rotate(360deg)',boxShadow:"1px 5px 2px #0456c8"}
        },
        text:{
          "0%":{color:'#737373'},
          "50%":{color:'#fff'},
          "100%":{color:'#737373'},
        }
      },
      animation: {
        ring: 'ring 2s linear infinite',
        text: 'text 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
