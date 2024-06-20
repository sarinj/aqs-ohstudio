import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        gray: {
          DEFAULT: '#e8e5e480',
          1: '#7f7f7f',
          2: '#00000080',
        },
      },
      transitionTimingFunction: {
        blur: 'cubic-bezier(0.2, 0.65, 0.3, 0.9)',
      },
      keyframes: {
        'slide-top': {
          '0%': { transform: 'translateY(70px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-top':
          'slide-top 0.6s cubic-bezier(.27,.63,.36,.75) var(--delay, 0s) both',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': value => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
  ],
}
export default config
