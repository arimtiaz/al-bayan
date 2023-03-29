/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'primary': {
          100: '#FFFAFA',
          500: '#C12328',
          800: '#87191C',
          900: '#31090A',
        },
        'gray': {
          100: '#F3F4F6',
          500: '#E0E0E0',
        },
       'black':'#21212F', 
      }
    },
  },
  plugins: [],
}

