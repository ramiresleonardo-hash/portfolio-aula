/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: '#10131A',
        muted: '#5B6472',
        surface: '#F3F6FB',
        line: '#E4E9F2',
        orbit: {
          DEFAULT: '#2F5EFF',
          light: '#5B7FFF',
          dark: '#1C3FCC',
        },
        accent: '#17B2A0',
      },
      boxShadow: {
        card: '0 12px 32px -12px rgba(16, 19, 26, 0.12)',
      },
    },
  },
  plugins: [],
};
