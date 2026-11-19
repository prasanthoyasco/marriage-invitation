/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#F9F5EC',
          200: '#F1E6D0',
          300: '#E6D3AC',
          400: '#D6BD81',
          500: '#C2A773', // primary royal gold
          600: '#AA8F57',
          700: '#8E7340',
          800: '#735B31',
          900: '#5A4624',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FAF9F7', // main background canvas
          200: '#F5F2EC',
          300: '#ECE6DC',
          400: '#E1D8CA',
          500: '#D5C8B4',
        },
        charcoal: {
          700: '#3A3F45',
          800: '#2C3135',
          900: '#252525', // primary text dark
          950: '#191C1E',
        },
        maroon: {
          500: '#8A273C',
          700: '#6B1D2F',
          900: '#4A0E17',
          950: '#32070D',
        },
      },
      fontFamily: {
        cinzel: ['"Cinzel Decorative"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        garamond: ['"EB Garamond"', 'serif'],
        arizonia: ['"Arizonia"', 'cursive'],
        hindi: ['"Noto Serif Devanagari"', 'serif'],
        tamil: ['"Noto Serif Tamil"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'ornate': '0 10px 30px -10px rgba(194, 167, 115, 0.25)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'subtle-gold': '0 0 25px rgba(194, 167, 115, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 2s infinite ease-in-out',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
      },
    },
  },
  plugins: [],
}
