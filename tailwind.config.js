/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FEDF3D',
        hover: '#FCC634',
        border: '#ADADAD',
        background: '#FFFEF6',
      },
      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

