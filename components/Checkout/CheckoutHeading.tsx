// 'use client';

import { PropertyForType } from '@/components/PropertyDescription/Layout/RenterReviewsMetrics';
import ViapropertyHeading from '@/components/Typography/ViapropertyHeading';
import React from 'react';

type CheckoutHeadingType = {
  propertyTitle: string;
  propertyFor: PropertyForType;
  discount?: string | null;
  propertyPrice: string;
  propertyDiscountPrice?: string | null;
  // children: ReactNode;
}

export default function
  CheckoutHeading({ propertyTitle, discount, propertyFor, propertyPrice, propertyDiscountPrice }: CheckoutHeadingType) {
  return (
    <>
      <div className={`mt-8 mb-12`}>
        <div className={`mb-5`}>
          <ViapropertyHeading headingSize={`md`}
                              label={propertyTitle} />
        </div>
        <div className={`flex items-center gap-28`}>
          <div className={`flex items-center gap-5`}>
            {propertyFor === `rent` && (
              <>
            <span
              className={`inline-block text-xl text-red-500 font-semibold`}>
              ${!propertyDiscountPrice ? propertyPrice : propertyDiscountPrice}<span
              className={`inline-block text-sm font-normal`}>/night</span> </span>
              </>
            )}

            {propertyFor === `sell` && (
              <>
                <span
                  className={`inline-block text-xl text-red-500 font-semibold`}>
                  ${!propertyDiscountPrice ? propertyPrice : propertyDiscountPrice}</span>
              </>
            )}

            {discount && (
              <>
                <span className={`font-semibold text-zinc-500 line-through`}>${propertyPrice}</span>
              </>
            )}
          </div>
          <div>
            {discount && (
              <>
                <p className={`bg-zinc-100 rounded-full text-sm truncate px-3 py-1
                          bg-linear-main-red text-white font-semibold`}>{discount} off</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
