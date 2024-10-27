// 'use client';

/*type ViapropertySidebarType = {
  // children: ReactNode;
}*/

import LabelAndTextBadge from '@/components/UI/Badge/LabelAndTextBadge';
import FoldList from '@/components/UI/FeatureList/FoldList';
import React from 'react';

export default function ViapropertySidebar(/*{  }: ViapropertySidebarType*/) {
  return (
    <>
      <div className={`border h-fit border-red-500 rounded-3xl p-7 w-full`}>
        <div className={`flex items-center justify-between mb-6`}>
          <div className={`flex gap-5 items-center`}>
                <span
                  className={`bg-clip-text inline-block text-transparent bg-linear-main-red font-bold text-2xl`}>$144,698</span>
            <span className={`text-zinc-300 inline-block line-through`}>$180,872</span>
          </div>
          <span
            className={`inline-block text-[13px] font-semibold bg-linear-main-red text-white px-3 py-1 rounded-full`}>20%</span>
        </div>
        <div>
          <h2 className={`bg-clip-text mb-4 text-transparent bg-linear-main-red font-bold text-3xl`}>Let&#39;s Buy
            it!</h2>
          <div className={`flex flex-col gap-3.5 mb-7`}>
            <LabelAndTextBadge label={`Location`} text={`UK, Birmingham, Lauchester street 14`} />
            <LabelAndTextBadge label={`Selling Options`} text={`Buy a Property`} />
          </div>
          <div className={`mb-6`}>
            <FoldList type={`checkbox`} checkboxes={[
              {
                checkboxLabel: `Garage`,
                checkboxName: `garage`,
                spanLabel: `10,000`
              },
              {
                checkboxLabel: `Garden`,
                checkboxName: `garden`,
                spanLabel: `5,000`
              },
              {
                checkboxLabel: `Pool`,
                checkboxName: `pool`,
                spanLabel: `15,000`
              }
            ]} label={`Extra Features`} />
          </div>
          <FoldList type={`default`} defaultProperties={[
            {
              label: `Property Price`,
              span: `180,872$`
            },
            {
              label: `Discount 20%`,
              span: `-36,174$`,
              type: `discount`
            },
            {
              label: `Garage`,
              span: `10,000$`
            },
            {
              label: `Include Furniture`,
              span: `5,000$`
            }
          ]} label={`Overall`} />
          <div className={`flex items-center justify-between mt-7 mb-3`}>
            <span className={`bg-clip-text text-2xl text-transparent bg-linear-main-red font-bold`}>Total</span>
            <span className={`bg-clip-text text-2xl text-transparent bg-linear-main-red font-bold`}>165,743$</span>
          </div>
          <div className={`w-full flex items-center`}>
            <button
              className={`bg-linear-main-red flex text-white rounded-2xl w-full text-center justify-center text-xl font-bold px-5 py-4 mt-7
                  transition-all duration-200 hover:animate-pulse`}>Buy
              Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
