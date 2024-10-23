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
        'linear-main-red': 'linear-gradient(90deg, #FB3838 0%, #F27155 100%)'
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