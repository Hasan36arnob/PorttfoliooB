/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode toggle
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#f97316', // Bright orange color
          600: '#ea580c', // Darker orange for hover effects
        },
        dark: '#1F1F1F', // Dark background
        light: '#EAEAEA', // Light text color
      },
    },
  },
  plugins: [],
};
