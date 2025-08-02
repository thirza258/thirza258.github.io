/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(0)', backgroundPosition: 'center top' },
          '50%': { transform: 'translateY(0)', backgroundPosition: 'center bottom' },
          '100%': { transform: 'translateY(0)', backgroundPosition: 'center top' },

        },
      },
      animation: {
        slide: 'slide 10s ease-in-out infinite',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}

