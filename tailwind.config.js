/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          base: '#F5F5F5',
          brand: '#00BCD4',
          accent: {
            100: '#FFF9C4',
            200: '#FFF59D',
            300: '#FFF176',
            400: '#FFEE58',
            500: '#FFEB3B',
            600: '#FDD835',
            700: '#FBC02D',
            800: '#F9A825',
            900: '#F57F17',
          },
        },
        dark: {
          base: '#121212',
          brand: '#0097A7',
          accent: {
            100: '#FFE082',
            200: '#FFD54F',
            300: '#FFCA28',
            400: '#FFC107',
            500: '#FFB300',
            600: '#FFA000',
            700: '#FF8F00',
            800: '#FF6F00',
            900: '#E65100',
          },
        },
      },
      borderRadius: {
        '1/2': '50%',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
