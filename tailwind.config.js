/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8B5CF6',
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
        background: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'soft-sm': '0 4px 20px -5px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}
