/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-light': "url('/images/bg-desktop-light.webp')",
        'mobile-light': "url('/images/bg-mobile-light.webp')",
        'desktop-dark': "url('/images/bg-desktop-dark.webp')",
        'mobile-dark': "url('/images/bg-mobile-dark.webp')",
      },
      colors: {
        primary: 'hsl(220, 98%, 61%)',
        secondary: 'hsl(235, 24%, 19%)',
        'very-dark-grayish-blue': 'hsl(235, 19%, 35%)',
        'dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'check-from': 'hsl(192, 100%, 67%)',
        'check-to': 'hsl(280, 87%, 65%)',

        'light-grayish-blue': 'hsl(233, 11%, 84%)',
        'light-grayish-blue-dark-hover': 'hsl(236, 33%, 92%)',
        'light-grayish-blue-dark': 'hsl(234, 39%, 85%)',
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

