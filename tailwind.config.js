/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Fix: define the border color token used by @apply border-border */
        border: "hsl(var(--border))",

        /* Your custom space & nebula palettes */
        space: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        nebula: {
          pink: '#ff6ec7',
          purple: '#9333ea',
          blue: '#3b82f6',
          cyan: '#06b6d4',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },

      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'meteor': 'meteor 3s linear infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        meteor: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'translateX(-500px) translateY(500px)', opacity: '0' },
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-space': 'linear-gradient(to bottom, #020617, #0f172a, #1e1b4b)',
      },
    },
  },
  plugins: [],
};
