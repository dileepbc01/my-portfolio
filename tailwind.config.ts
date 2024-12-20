import type { Config } from 'tailwindcss';

import { fontFamily } from 'tailwindcss/defaultTheme';
import tailwindAnim from 'tailwindcss-animate';
const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'slide-from-down-and-fade': {
          '0%': {
            opacity: '0',
            transform: 'translateY(12px)',
            visibility: 'hidden',
          },
          '1%': { visibility: 'visible' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-from-down-and-fade-1':
          'slide-from-down-and-fade 0.6s ease-in-out 0.1s both',
        'slide-from-down-and-fade-2':
          'slide-from-down-and-fade 0.6s ease-in-out 0.2s both',
        'slide-from-down-and-fade-3':
          'slide-from-down-and-fade 0.6s ease-in-out 0.3s both',
        'slide-from-down-and-fade-4':
          'slide-from-down-and-fade 0.6s ease-in-out 0.4s both',
        'slide-from-down-and-fade-5':
          'slide-from-down-and-fade 0.6s ease-in-out 0.5s both',
        'slide-from-down-and-fade-6':
          'slide-from-down-and-fade 0.6s ease-in-out 0.6s both',
      },
    },
  },
  plugins: [tailwindAnim],
} satisfies Config;

export default config;
