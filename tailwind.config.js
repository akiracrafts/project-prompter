/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#036bfc',
        'l-blue': '#07D2FB',
        'dark-blue': '#0819B5',
        'mint-green': '#21FCC7',
        'purple': '#4E4FEB',
        'f-blue': '#068FFF',
      }
    },
  },
  plugins: [],
}