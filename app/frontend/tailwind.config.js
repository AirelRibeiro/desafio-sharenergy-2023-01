/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lima: '#d6df27',
        middlegray: '#161c2d',
        alga: '#00a2a2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
