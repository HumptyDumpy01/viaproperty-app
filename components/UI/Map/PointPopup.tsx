// 'use client';

import { calculateDaysPassed } from '@/utils/functions/calculateDaysPassed';
import Image, { StaticImageData } from 'next/image';
import ButtonGoTo from '@/components/UI/Button/ButtonGoTo';
import React from 'react';

type PointPopupType = {
  imageUrl: string | StaticImageData;
  price: string;
  title: string;
  location: string;
  createdAt: string;
  // children: ReactNode;
}

export default function PointPopup({ imageUrl, title, price, location, createdAt }: PointPopupType) {
  return (
    <>
      <div className={`flex items-center gap-3.5 rounded-2xl w-60 pb-2`}>
        <div className={`relative w-[83px] h-[120px]`}>
          <Image fill src={imageUrl} alt="dummy" className={`rounded-2xl object-cover absolute`} />
        </div>
        <div className={`flex flex-col gap-2`}>
          <span className={`text-lg font-semibold text-zinc-900`}>${price}</span>
          <p>{title}</p>
          <p className={`text-zinc-500`}>{location}</p>
          <div className={`flex justify-between items-center`}>
            <ButtonGoTo type={`red`} />
            <span>{calculateDaysPassed(createdAt)} days ago</span>
          </div>
        </div>
      </div>
    </>
  );
}
