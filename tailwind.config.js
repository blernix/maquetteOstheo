/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette Naturelle (Vert sauge + Terre)
        primary: {
          50: '#f3f6f4',
          100: '#e4ebe6',
          200: '#cad9cd',
          300: '#a4bfaa',
          400: '#84a98c', // Vert sauge principal
          500: '#6a8f73',
          600: '#53725b',
          700: '#445c4a',
          800: '#394c3e',
          900: '#2f3f34',
        },
        secondary: {
          50: '#faf6f3',
          100: '#f5ede6',
          200: '#e8d4c4',
          300: '#e8b4a0', // Terre cuite douce principal
          400: '#db8f70',
          500: '#cf704f',
          600: '#c15843',
          700: '#a14739',
          800: '#843c33',
          900: '#6d352d',
        },
        accent: {
          50: '#f0f4f3',
          100: '#dde7e4',
          200: '#bdd0cb',
          300: '#95b3ac',
          400: '#6f958d',
          500: '#52796f', // Bleu gris
          600: '#456259',
          700: '#3a5049',
          800: '#32423d',
          900: '#2d3834',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#1f2937', // Gris anthracite
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'ui-serif', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
