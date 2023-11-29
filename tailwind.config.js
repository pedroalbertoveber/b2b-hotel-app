/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#24262B',
        white: '#FFFFFF',
        divider: '#BABABA',
        background: {
          DEFAULT: '#FAFAFA',
          paper: '#FFFFFF',
          info: '#FAFAFA',
          tooltip: '#616161',
        },
        primary: {
          DEFAULT: '#273472',
          300: '#4EB0E3',
          500: '#273472',
          900: '#1B144B',
        },
        secondary: {
          DEFAULT: '#EE4978',
          300: '#FE719A',
          500: '#EE4978',
          800: '#B43B66',
        },
        error: {
          DEFAULT: '#FF3A28',
          300: '#FF785D',
          500: '#FF3A28',
          800: '#B61C35',
        },
        warning: {
          DEFAULT: '#FFA70F',
          300: '#FFC34B',
          500: '#FFA70F',
          800: '#B76907',
        },
        success: {
          DEFAULT: '#80B914',
          300: '#BDE750',
          500: '#80B914',
          800: '#4D7D08',
        },
        info: {
          DEFAULT: '#6690FF',
          300: '#ADC8FF',
          500: '#6690FF',
          800: '#102693',
        },
        gray: {
          300: '#D4D4D4',
          600: '#727578',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        sidebar: 'linear-gradient(164deg, #273472 -96.91%, #1B144B 126.05%);',
      },
      boxShadow: {
        menubar: '0px 7px 10px 0px rgba(158, 158, 158, 0.15);',
      },
    },
  },
  plugins: [],
}