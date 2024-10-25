// tailwind.config.ts
import type { Config } from 'tailwindcss';
// @ts-ignore
import scrollbarHide from 'tailwind-scrollbar-hide';
import scrollbar from 'tailwind-scrollbar';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/globals.css' // Add this line
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
        /* IMPORTANT: HOME PAGE */
        // NAVIGATION
        'bp-1178': '1178px',
        'bp-750': '750px',
        'bp-480': '480px',
        // HERO
        'bp-1235': '1235px',
        'bp-790': '790px',
        'bp-700': '700px',
        'bp-620': '620px',
        'bp-464': '464px',
        // ABOUT
        'bp-1087': '1087px',
        // TESTIMONIALS,
        'bp-1165': '1165px',
        // CTA SECTION,
        'bp-1009': '1009px',
        'bp-732': '732px',
        // FOOTER SECTION
        'bp-1160': '1160px',
        ///////////////////////////////////////
        /* IMPORTANT: PROPERTIES */
        'bp-1364': '1364px',
        'bp-896': '896px'

      },
      gridTemplateColumns: {
        'properties': '280px 603px 422px',
        'property-description': '914px auto'
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
    },
    scrollbarHide,
    scrollbar
  ]
};
export default config;