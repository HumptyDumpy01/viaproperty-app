'use client';

import LabelAndTextBadge from '@/components/UI/Badge/LabelAndTextBadge';
import FoldList from '@/components/UI/FeatureList/FoldList';
import React from 'react';
import { slugifyText } from '@/utils/functions/slugifyText';
import MUICalendar from '@/components/UI/Calendar/MUICalendar';

export type PropertySidebarDetails = {
  price: number;
  onSale: {
    isOnSale: boolean;
    discount: number | null;
    newPrice: string | null;
  }
  propertyFor: 'rent' | 'sell';
  location: string;
  extraPricing: { title: string; price: number; }[] | []
}

export type ViapropertySidebarType = {
  propertyDetails: PropertySidebarDetails
  // children: ReactNode;
}

export default function ViapropertySidebar({ propertyDetails }: ViapropertySidebarType) {
  const { price, onSale, propertyFor, location, extraPricing } = propertyDetails;
  return (
    <>
      <div className={`border h-fit border-red-500 rounded-3xl p-7 w-full`}>
        <div className={`flex items-center justify-between mb-6`}>
          <div className={`flex gap-5 items-center`}>
            {onSale.isOnSale && (
              <>
                <span
                  className={`bg-clip-text inline-block text-transparent bg-linear-main-red font-bold text-2xl`}>
                 ${onSale.newPrice}<span className={`text-sm`}>{propertyFor === `rent` ? `/month` : ``}</span>
                </span>
                <span className={`text-zinc-300 inline-block line-through`}>
                  {price}
                </span>
              </>
            )}
            {!onSale.isOnSale && (
              <>
                <span
                  className={`bg-clip-text inline-block text-transparent bg-linear-main-red font-bold text-2xl`}>${price}<span
                  className={`text-sm`}>/month</span></span>
              </>
            )}
          </div>
          {onSale.isOnSale && (
            <>
          <span
            className={`inline-block text-[13px] font-semibold bg-linear-main-red text-white px-3 py-1 rounded-full`}>{onSale.discount}</span>
            </>
          )}
        </div>
        <div>
          <h2
            className={`bg-clip-text mb-4 text-transparent bg-linear-main-red font-bold text-3xl`}>Let&#39;s {propertyFor === `rent` ? `Rent` : `Buy`} it!</h2>
          <div className={`flex flex-col gap-3.5 mb-7 min-w-72`}>
            <LabelAndTextBadge label={`Location`}
                               text={location.length > 60 ? location.slice(0, 60) + `..` : location} />
            <LabelAndTextBadge label={`Selling Options`} text={
              propertyFor === `rent` ? `Rent a Property` : `Buy a Property`
            } />
            {propertyFor === `rent` && (
              <>
                <div className={`flex flex-col gap-3.5 justify-center min-w-72`}>
                  <div className={`cursor-pointer`}>
                    {/*<span className={`text-[12.8px] text-zinc-500`}>Checkout From</span>*/}
                    {/*<p className={`bg-zinc-100 rounded-xl text-sm truncate px-4 py-3`}>{new Date().toUTCString()}</p>*/}
                    <MUICalendar />
                  </div>
                </div>
              </>
            )}
          </div>
          {extraPricing.length > 0 && (
            <>
              <div className={`mb-6`}>
                <FoldList type={`checkbox`} checkboxes={
                  extraPricing.map((extra) => {
                    return {
                      checkboxLabel: extra.title,
                      checkboxName: slugifyText(extra.title),
                      spanLabel: extra.price.toString()
                    };
                  })
                } label={`Extra Features`} />
              </div>
            </>
          )}
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
