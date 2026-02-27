import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ycod: {
          pink: '#F5A0B8',
          blue: '#4A90D9',
          yellow: '#F7DC6F',
          coral: '#F07070',
          green: '#00C9A7',
          'dark-blue': '#2E86AB',
          'bg-blue': '#2B7FB5',
          black: '#1A1A2E',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['Fredoka', 'system-ui', 'Arial Rounded MT Bold', 'Trebuchet MS', 'sans-serif'],
        body: ['Nunito', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        'memphis-drift': 'memphis-drift 60s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        'memphis-drift': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(2deg)' },
          '66%': { transform: 'translateY(10px) rotate(-1deg)' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      boxShadow: {
        'retro': '4px 4px 0px #1A1A2E',
        'retro-lg': '6px 6px 0px #1A1A2E',
        'retro-sm': '2px 2px 0px #1A1A2E',
      },
    },
  },
  plugins: [],
};
export default config;
