/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#121212',
          800: '#1E1E1E',
          700: '#2D2D2D',
          600: '#3D3D3D',
          500: '#4D4D4D',
          400: '#5D5D5D',
          300: '#6D6D6D',
          200: '#7D7D7D',
          100: '#8D8D8D',
        },
      },
    },
  },
  plugins: [],
};