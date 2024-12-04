// 'use client';

type PriceAndTaskHistoryType = {
  text?: string;
  price: string;
  propertyFor: `rent` | `sell`;
  // children: ReactNode;
}

import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import React from 'react';

const boilerplateText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
          tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
        `;

export default function PriceAndTaskHistory({ text = boilerplateText, price, propertyFor }: PriceAndTaskHistoryType) {
  return (
    <>
      <div>
        <div className={`flex gap-5 items-center mb-7`}>
          <ViapropertyIcon icon={`dollar`} />
          <span
            className={`inline-block bg-clip-text text-xl text-transparent bg-linear-main-red font-semibold`}>{price}
            {propertyFor === `rent` && (<span className={`text-sm`}>/month</span>)}</span>
        </div>
        <p className={`leading-relaxed text-sm`}>{text}</p>
      </div>
    </>
  );
}
