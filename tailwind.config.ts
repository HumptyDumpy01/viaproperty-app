// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat-alternates': ['"Montserrat Alternates"', 'sans-serif']
      },
      backgroundImage: {
        'linear-main-red': 'linear-gradient(90deg, #FB3838 0%, #F27155 100%)',
        'linear-main-dark-blue': 'linear-gradient(73deg, #00202A 20.95%, rgba(0, 32, 42, 0.60) 134.36%)',
        'linear-white-to-red': 'linear-gradient(267deg, #FF3535 -5.69%, #F1F1F1 92.09%)',
        'linear-white-to-blue': 'linear-gradient(103deg, #F6F6F6 52.39%, #00202A 69.9%)'
      },
      screens: {
        'bp-1178': '1178px',
        'bp-750': '750px',
        'bp-480': '480px'
      }
    }
  },
  plugins: [
    // @ts-ignore
    function({ addUtilities }) {
      addUtilities({
        '.bg-clip-text': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text'
        },
        '.text-transparent': {
          '-webkit-text-fill-color': 'transparent'
        }
      });
    }
  ]
};
export default config;