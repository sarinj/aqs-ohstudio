import type { Config } from 'tailwindcss'

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
      fontFamily: {
        reg: ['var(--font-reg)'],
        med: ['var(--font-med)'],
      },
    },
  },
  plugins: [],
}
export default config
