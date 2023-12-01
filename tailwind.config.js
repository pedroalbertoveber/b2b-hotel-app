/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
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
          50: '#7E8DD3',
          100: '#6F7FCE',
          200: '#5064C3',
          300: '#3C50AF',
          400: '#314290',
          500: '#273472',
          600: '#192148',
          700: '#0A0E1E',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        primaryLight: {
          DEFAULT: '#4EB0E3',
          50: '#EDF7FC',
          100: '#DBEFF9',
          200: '#B8DFF4',
          300: '#94CFEE',
          400: '#71C0E9',
          500: '#4EB0E3',
          600: '#2299D7',
          700: '#1A77A6',
          800: '#135476',
          900: '#0B3246',
          950: '#07202D',
        },
        primaryDark: {
          DEFAULT: '#1B144B',
          50: '#5948CE',
          100: '#4B38CA',
          200: '#3E2EAC',
          300: '#32258B',
          400: '#271D6B',
          500: '#1B144B',
          600: '#0B081F',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        secondary: {
          DEFAULT: '#EE4978',
          50: '#FEF1F5',
          100: '#FCDEE7',
          200: '#F8B9CB',
          300: '#F594AF',
          400: '#F16E94',
          500: '#EE4978',
          600: '#E91652',
          700: '#B61140',
          800: '#830C2E',
          900: '#4F071C',
          950: '#360513',
        },
        secondaryLight: {
          DEFAULT: '#FE719A',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFEBF0',
          300: '#FFC2D4',
          400: '#FE9AB7',
          500: '#FE719A',
          600: '#FE3972',
          700: '#FD024B',
          800: '#C5013A',
          900: '#8E012A',
          950: '#720122',
        },
        secondaryDark: {
          DEFAULT: '#B43B66',
          50: '#E9BDCD',
          100: '#E4AEC1',
          200: '#DA8FAA',
          300: '#D07092',
          400: '#C6527B',
          500: '#B43B66',
          600: '#8A2D4E',
          700: '#5F1F36',
          800: '#35111E',
          900: '#0B0406',
          950: '#000000',
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
      borderRadius: {
        b2bSmall: '0.375rem',
        b2b: '0.625rem',
      },
      fontSize: {
        large: '1.5rem',
        normal: '1rem',
        small: '0.75rem',
        extraSmall: '0.625rem',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        sidebar: 'linear-gradient(164deg, #273472 -96.91%, #1B144B 126.05%);',
      },
      boxShadow: {
        menubar: '0px 7px 10px 0px rgba(158, 158, 158, 0.15);',
        'sidebar-button':
          '0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.26);',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), 'prettier-plugin-tailwindcss'],
}
