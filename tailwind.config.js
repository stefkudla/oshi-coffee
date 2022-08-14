/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        fore: {
          primary: 'var(--color-fore-primary)',
          accent: 'var(--color-fore-accent)',
        },
        back: {
          primary: 'var(--color-back-primary)',
          accent: 'var(--color-back-accent)',
        },
      },
    },
  },
  plugins: [],
}
