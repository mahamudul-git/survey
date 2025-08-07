/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInScale: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInUpSmall: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        growHeight: {
          '0%': {
            height: '0px',
          },
          '100%': {
            height: 'var(--final-height)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-scale': 'fadeInScale 0.5s ease-in-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'fade-in-up-small': 'fadeInUpSmall 0.4s ease-out forwards',
        'grow-height': 'growHeight 0.5s ease-out forwards',
      },
      animationDelay: {
        '100': '0.1s',
        '200': '0.2s',
        '300': '0.3s',
        '400': '0.4s',
        '500': '0.5s',
        '600': '0.6s',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-100': {
          'animation-delay': '0.1s',
        },
        '.animation-delay-200': {
          'animation-delay': '0.2s',
        },
        '.animation-delay-300': {
          'animation-delay': '0.3s',
        },
        '.animation-delay-400': {
          'animation-delay': '0.4s',
        },
        '.animation-delay-500': {
          'animation-delay': '0.5s',
        },
        '.animation-delay-600': {
          'animation-delay': '0.6s',
        },
        '.animation-delay-650': {
          'animation-delay': '0.65s',
        },
        '.animation-delay-700': {
          'animation-delay': '0.7s',
        },
        '.animation-delay-750': {
          'animation-delay': '0.75s',
        },
        '.animation-delay-800': {
          'animation-delay': '0.8s',
        },
        '.animation-delay-850': {
          'animation-delay': '0.85s',
        },
        '.animation-delay-900': {
          'animation-delay': '0.9s',
        },
        '.animation-delay-950': {
          'animation-delay': '0.95s',
        },
        '.animation-delay-1000': {
          'animation-delay': '1.0s',
        },
        '.animation-delay-1050': {
          'animation-delay': '1.05s',
        },
        '.animation-delay-1100': {
          'animation-delay': '1.1s',
        },
        '.initial-hidden': {
          opacity: '0',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}

