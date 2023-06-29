/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0b2a00',
          secondary: '#4e7934',
          accent: '#89b4ad',
          neutral: '#3d4451',
          'base-100': '#ffffff',
          black: '#020f01',
        },
      },
    ],
  },
};
