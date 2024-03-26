/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-light': "url('./public/images/bg-desktop-light.webp')",
        'mobile-light': "url('./public/images/bg-mobile-light.webp')",
        'desktop-dark': "url('./public/images/bg-desktop-dark.webp')",
        'mobile-dark': "url('./public/images/bg-mobile-dark.webp')",
      },
      colors: {
        primary: 'hsl(220, 98%, 61%)',
        secondary:'hsl(235, 24%, 19%)',
        'check-from': 'hsl(192, 100%, 67%)',
        'check-to': 'hsl(280, 87%, 65%)',
      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      backgroundColor: {
        primaryLight: 'hsl(0, 0%, 98%)',
        primary: 'hsl(235, 21%, 11%)',
      },
      borderColor: {
        primary: 'hsl(235, 21%, 11%)',
      },
    },
  },
  plugins: [],
};

