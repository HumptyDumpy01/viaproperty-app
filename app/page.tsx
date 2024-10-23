import React from 'react';
import Navigation from '@/components/Layout/Navigation/Navigation';
import Hero from '@/components/Layout/Hero/Hero';
import About from '@/components/Layout/About/About';
import Heading from '@/components/Typography/Heading';
import Link from 'next/link';
import Image from 'next/image';

import BuyServiceImg from '@/assets/home/our-services/service-buy.png';
import RentServiceImg from '@/assets/home/our-services/service-rent.png';
import SellServiceImg from '@/assets/home/our-services/service-sell.png';
import CommercialServiceImg from '@/assets/home/our-services/service-commercial.png';

export default function Home() {
  return (
    <main className={``}>
      <Navigation />
      <Hero />
      <About />
      <section className={`mb-20`}>
        <div className={`max-w-7xl mx-auto w-full`}>
          <div className={`flex items-center gap-9 mb-11`}>
            <Heading span={`we can offer a lot!`} heading={`Our Services`} />
            <div className={`flex gap-2 text-[15px] items-center cursor-pointer`}>
              <Link className={`uppercase font-semibold`} href={`/properties`}>Explore</Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path
                  d="M6.47954 1.12341C6.62019 0.9828 6.81094 0.903809 7.00982 0.903809C7.20871 0.903809 7.39945 0.9828 7.54011 1.12341L10.9153 4.49864C11.0559 4.63929 11.1349 4.83004 11.1349 5.02892C11.1349 5.22781 11.0559 5.41855 10.9153 5.55921L7.54011 8.93443C7.39865 9.07106 7.20918 9.14666 7.01252 9.14495C6.81586 9.14324 6.62774 9.06436 6.48867 8.9253C6.34961 8.78623 6.27073 8.59811 6.26902 8.40145C6.26731 8.20479 6.34291 8.01532 6.47954 7.87386L8.50992 5.77897H1.38445C1.18552 5.77897 0.994746 5.69995 0.854084 5.55929C0.713422 5.41863 0.634399 5.22785 0.634399 5.02892C0.634399 4.83 0.713422 4.63922 0.854084 4.49856C0.994746 4.3579 1.18552 4.27887 1.38445 4.27887H8.50992L6.47954 2.18398C6.33893 2.04333 6.25993 1.85258 6.25993 1.6537C6.25993 1.45481 6.33893 1.26407 6.47954 1.12341Z"
                  fill="#00202A" />
              </svg>
            </div>
          </div>

          <div className={`flex gap-6`}>
            <div className={`flex flex-col`}>
              <Image className={`mb-6`} src={BuyServiceImg} alt={`Buy a Property Image`} />
              <div className={`text-center`}>
                <h3 className={`text-red-600 font-bold text-3xl mb-3`}>Buy a property</h3>
                <p className={`text-zinc-400 font-medium`}><span>1315</span> offers</p>
              </div>
            </div>

            <div className={`flex flex-col`}>
              <Image className={`mb-6`} src={RentServiceImg} alt={`Rent a Property Image`} />
              <div className={`text-center`}>
                <h3 className={`text-red-600 font-bold text-3xl mb-3`}>Rent a property</h3>
                <p className={`text-zinc-400 font-medium`}><span>2645</span> offers</p>
              </div>
            </div>

            <div className={`flex flex-col`}>
              <Image className={`mb-6`} src={SellServiceImg} alt={`Rent a Property Image`} />
              <div className={`text-center`}>
                <h3 className={`text-red-600 font-bold text-3xl mb-3`}>Sell a property</h3>
                <p className={`text-zinc-400 font-medium`}><span>You can sell your own house</span></p>
              </div>
            </div>

            <div className={`flex flex-col`}>
              <Image className={`mb-6`} src={CommercialServiceImg} alt={`Commercial Property Image`} />
              <div className={`text-center`}>
                <h3 className={`text-red-600 font-bold text-3xl mb-3`}>Commercial</h3>
                <p className={`text-zinc-400 font-medium`}><span>611</span> offers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
