// 'use client';

/*type FooterColTwoType = {
  // children: ReactNode;
}*/

import MetaIcon from '@/components/UI/Icon/MetaIcon';
import Clock from '@/components/UI/Icon/Clock';
import React from 'react';
import LogoFull from '@/components/UI/Logo/LogoFull';
import UlList from '@/components/UI/FeatureList/UlList';

export default function FooterColTwo(/*{  }: FooterColTwoType*/) {
  return (
    <>
      <div className={`col-span-3 bg-slate-950 rounded-2xl pt-12 px-12 pb-10`}>
        <div className={`grid grid-cols-4`}>
          <div className={`col-span-2 flex flex-col text-white`}>
            <LogoFull />
            <div className={`mb-9`}>
              <p className={`text-zinc-500 mb-2.5 select-all`}>1-(800)-435-1414-1413-341</p>
              <p className={`select-all`}>viaproperty.test@gmail.com</p>
            </div>
            <div className={`flex items-center gap-3`}>
              <MetaIcon type={`facebook`} background={true} />
              <MetaIcon type={`instagram`} background={true} />
              <MetaIcon type={`x`} background={true} />
              <MetaIcon type={`viaproperty`} background={true} />
              <MetaIcon type={`linkedin`} background={true} />
            </div>
          </div>
          <div className={`text-white ml-auto`}>
            <UlList list={[
              {
                linkLabel: `About Us`,
                href: `#`
              },
              {
                linkLabel: `Mobile App`,
                href: `#`
              },
              {
                linkLabel: `Privacy Policy`,
                href: `#`
              }
            ]} />
          </div>
          <div className={`text-white ml-auto`}>
            <UlList list={[
              {
                linkLabel: `Support`,
                href: `#`
              },
              {
                linkLabel: `Contact Us`,
                href: `#`
              },
              {
                linkLabel: `FAQ`,
                href: `#`
              }
            ]} />
          </div>
        </div>
        <div className={`mt-12 flex items-center gap-5 max-w-[450px]`}>
          <div>
            <Clock />
          </div>
          <p className={`text-sm leading-relaxed`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
            incididunt ut labore
            et dolore magna aliqua. </p>
        </div>
      </div>
    </>
  );
}
