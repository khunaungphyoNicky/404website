/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#147EFB',
          600: '#0d6efd',
          700: '#0b5ed7',
          900: '#0a2540',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Mulish', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(20, 126, 251, 0.08)',
        'card-hover': '0 12px 40px rgba(20, 126, 251, 0.15)',
      },
    },
  },
  plugins: [],
}
