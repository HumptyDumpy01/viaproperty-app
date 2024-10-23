// 'use client';

type BadgeType = {
  title: string;
  city: string;
  price: string;
  absolute?: boolean;
  // children: ReactNode;
}

import React from 'react';

export default function Badge({ title, city, price, absolute = false }: BadgeType) {
  return (
    <>
      <div className={`${absolute ? `absolute` : ``} top-3 left-3 bg-neutral-50 rounded-xl py-2.5 px-3 `}>
        <h3 className={`text-zinc-600 text-[17px] font-semibold truncate max-w-screen-xs`}>{title}</h3>
        <p className={`text-sm`}>{city}, <span className={`text-red-600`}>{price}$</span></p>
      </div>
    </>
  );
}
