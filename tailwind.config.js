// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0E3A6C',
          50: '#e6f7f6',
          100: '#cfeff0'
        },
        // Original tokens
        'brand-dark': '#002D2D',
        'brand-primary': '#3AE079',
        'brand-light': '#F2F4F5',
        'brand-text': '#4A6581',
        accent: '#3AE079',
        bg: '#0f1724',
        card: '#121826',
        'nuvica-navy': '#0E3A6C',
        'nuvica-green': '#3AE079',
        'nuvica-gray': '#4A6581',
        'nuvica-bg-start': '#CBE0F2',
        'nuvica-bg-end': '#FFFFFF',
        // Guarrent Design System
        'brand-blue': '#1565D8',
        'dark-navy': '#0A1628',
        'mid-navy': '#0D2140',
        'light-blue-bg': '#EEF4FF',
        'g-blue-100': '#DBEAFE',
        'g-blue-200': '#BFDBFE',
        'g-blue-600': '#2563EB',
        'g-blue-700': '#1D4ED8',
        'g-slate-800': '#1e293b',
        'g-slate-900': '#0f172a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A1628 0%, #0D2140 50%, #1565D8 100%)',
        'card-gradient': 'linear-gradient(135deg, #0D2140 0%, #1565D8 100%)',
        'section-gradient': 'linear-gradient(180deg, #EEF4FF 0%, #FFFFFF 100%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'orbit': 'orbit 12s linear infinite',
        'orbit-rev': 'orbit 18s linear infinite reverse',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'count-up': 'countUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(90px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(90px) rotate(-360deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.95)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(21, 101, 216, 0.4)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.15)',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}