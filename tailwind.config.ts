import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(300px)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        'showCart': 'slideIn .5s ease',
      },
      backgroundColor: {
        'overlay': 'rgba(0,0,0,0.5)'
      },
      boxShadow: {
        'modal': 'rgba(0, 0, 0, 0.2) 0px 6px 32px'
      },
      maxWidth: {
        "xxs": '22rem'
      },
      colors: {
        'hover': 'box-shadow: rgba(128, 138, 157, 0.24) 0px 8px 32px 0px, rgba(128, 138, 157, 0.12) 0px 1px 2px',
        'primary': '#3861fb'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
],
}
export default config
