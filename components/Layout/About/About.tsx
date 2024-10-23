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
      <section className={`mt-16 mb-20`}>
        <div className={`max-w-7xl mx-auto w-full`}>
          <div className={`flex gap-72`}>

            <Heading span={`Why us?`} heading={`About`} />
            <div className={`grid grid-cols-2 gap-12`}>
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
