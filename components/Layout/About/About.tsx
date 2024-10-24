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
                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                 do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Lorem ipsum dolor sit amet.`}
                metrics={[{ number: 788, metric: `completed goals` }, { number: 5, metric: `years of experience` }]} />

              <AboutCol
                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                 do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Lorem ipsum dolor sit amet.`}
                metrics={[{ number: 699, metric: `satisfied customers` }, {
                  number: 295,
                  metric: `cities around usa`
                }]} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
