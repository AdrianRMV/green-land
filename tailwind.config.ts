import type { Config } from 'tailwindcss';

/** Green Land Solutions - Paleta de marca desde el logo */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Verdes (logo)
        brand: {
          'green-dark': '#2D5016',
          'green-mid': '#4A7C2E',
          'green': '#7CB342',
          'green-light': '#AED581',
        },
        // Tonos tierra
        earth: {
          dark: '#5D4037',
          DEFAULT: '#795548',
        },
        // Acento
        sun: '#FFD54F',
        // Neutrales
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Montserrat', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(45, 80, 22, 0.1)',
        'card': '0 4px 24px -4px rgba(45, 80, 22, 0.12)',
        'card-hover': '0 20px 40px -12px rgba(45, 80, 22, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
