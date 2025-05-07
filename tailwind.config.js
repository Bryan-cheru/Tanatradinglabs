/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#7C3AED',
          50: '#F3EAFD',
          100: '#E8D5FB',
          200: '#D2ACF7',
          300: '#BC83F3',
          400: '#A65AEF',
          500: '#7C3AED',
          600: '#6527DD',
          700: '#521DBB',
          800: '#42189A',
          900: '#32137A',
        },
        cyan: {
          DEFAULT: '#00FFFF',
          50: '#E0FFFF',
          100: '#C2FFFF',
          200: '#85FFFF',
          300: '#47FFFF',
          400: '#0AFFFF',
          500: '#00FFFF',
          600: '#00CCCC',
          700: '#009999',
          800: '#006666',
          900: '#003333',
        },
        pink: {
          DEFAULT: '#FF4F81',
          50: '#FFF0F4',
          100: '#FFE2EA',
          200: '#FFC5D5',
          300: '#FFA8BF',
          400: '#FF8BAA',
          500: '#FF4F81',
          600: '#FF2265',
          700: '#F5004D',
          800: '#C30040',
          900: '#910030',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
        'reveal': 'reveal 1s ease-in-out forwards',
        'rotate': 'rotate 20s linear infinite',
        'rotate-slow': 'rotate 30s linear infinite',
        'rotate-reverse': 'rotate 20s linear infinite reverse',
        'orbit': 'orbit 20s linear infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'scanner': 'scan 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'data-stream': 'dataStream 5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        glow: {
          'from': {
            boxShadow: '0 0 5px rgba(124, 58, 237, 0.5), 0 0 10px rgba(124, 58, 237, 0.3)'
          },
          'to': {
            boxShadow: '0 0 10px rgba(124, 58, 237, 0.8), 0 0 20px rgba(124, 58, 237, 0.5), 0 0 30px rgba(124, 58, 237, 0.3)'
          },
        },
        textGlow: {
          'from': {
            textShadow: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)'
          },
          'to': {
            textShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.3)'
          },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        rotate: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        orbit: {
          'from': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'rgba(124, 58, 237, 0.8)' },
        },
        scan: {
          '0%': { transform: 'rotate(45deg) translateY(-100%)' },
          '100%': { transform: 'rotate(45deg) translateY(100%)' },
        },
        fadeInUp: {
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        dataStream: {
          '0%': { backgroundPosition: '100% 0' },
          '100%': { backgroundPosition: '-100% 0' },
        },
      },
      boxShadow: {
        'glow-purple': '0 0 15px 2px rgba(124, 58, 237, 0.3)',
        'glow-cyan': '0 0 15px 2px rgba(0, 255, 255, 0.3)',
        'glow-pink': '0 0 15px 2px rgba(255, 79, 129, 0.3)',
      },
    },
  },
  plugins: [],
}