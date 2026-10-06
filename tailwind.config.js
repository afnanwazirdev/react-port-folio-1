/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#03140c', panel: '#062417', line: 'rgba(0,255,156,.14)', accent: '#00ff9c', muted: '#8b95a5' },
      fontFamily: { display: ['"Space Grotesk"', 'sans-serif'], sans: ['Inter', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
