/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0A1E17',
          900: '#0F2C23',
          800: '#13392E',
          700: '#1A4D3E', // Primary
          600: '#246350',
          500: '#2F7C65',
        },
        cream: {
          50: '#FCFAF6',
          100: '#FAF7F2', // Background
          200: '#F4EFEA',
          300: '#EAE1D6',
          400: '#DFD2C0',
        },
        terracotta: {
          400: '#D68254',
          500: '#C96E3D', // CTA Accent
          600: '#B45D2E',
          700: '#954B22',
        },
        gold: {
          300: '#E5D6B8',
          400: '#DDC69E',
          500: '#CFAF7E', // Accent / borders
          600: '#B8965F',
        },
        charcoal: {
          950: '#111111',
          900: '#1A1A1A', // Primary text
          800: '#262626',
          700: '#3D3D3D',
          600: '#5A5A5A',
          500: '#757575',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        float: 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
