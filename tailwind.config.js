/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      colors:{
        'primary': '#F7C904',
        'secondary': '#1F1E25',
        'tertiary': '#10B6D1',
      },
      boxShadow: {
        s1: '0px 4px 27px rgba(243, 194, 9, 0.59)',
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
    },
  },
  plugins: [],
}
