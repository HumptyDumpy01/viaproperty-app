// 'use client';

/*type AboutType = {
  // children: ReactNode;
}*/

import React from 'react';
import Heading from '@/components/Typography/Heading';
import AboutCol from '@/components/Layout/About/AboutCol';

export default function About(/*{  }: AboutType*/) {
  return (
    <>
      <section className={`mt-20 mb-24`}>
        <div className={`max-w-7xl mx-auto w-full`}>
          <div className={`flex flex-col bp-1087:flex-row bp-1087:gap-72 gap-24`}>

            <Heading span={`Why us?`} heading={`About`} />
            <div className={`bp-700:grid bp-700:grid-cols-2 flex flex-wrap bp-700:gap-12 gap-24`}>
              <AboutCol
                text={`At viaproperty, we are committed to providing exceptional real estate services. Our team of experts is dedicated to helping you find the perfect property, whether you are looking to buy, rent, or invest.`}
                metrics={[{ number: 788, metric: `completed goals` }, { number: 5, metric: `years of experience` }]} />

              <AboutCol
                text={`Our extensive network and deep understanding of the real estate market allow us to offer unparalleled service. We take pride in our ability to match clients with properties that meet their unique needs and preferences. `}
                metrics={[{ number: 699, metric: `satisfied customers` }, {
                  number: 295,
                  metric: `cities around USA`
                }]} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}