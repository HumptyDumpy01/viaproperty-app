// 'use client';

import ButtonLink from '@/components/UI/Button/ButtonLink';
import React from 'react';
import { CldImage } from 'next-cloudinary';

type CardPropertyType = {
  type: `rent` | `sell`
  srcImg: string;
  altImg: string;
  heading: string;
  paragraph: string;
  total: string;
  createdAt: number;
  href: string;
  // children: ReactNode;
}

export default function
  CardProperty({
                 type,
                 href,
                 createdAt,
                 heading,
                 altImg,
                 srcImg,
                 total,
                 paragraph
               }: CardPropertyType) {
  return (
    <>
      <div className={`flex flex-col min-w-80 max-w-80 h-[510px] transition-all duration-200 
      hover:scale-95 hover:rotate-1 rounded-3xl overflow-hidden`}>
        <div className={`w-full relative h-60 rounded-3xl overflow-hidden`}>
          <CldImage
            width={400}
            height={100}
            src={srcImg}
            alt={altImg}
            quality="auto:best"
            format={`auto`}
            placeholder="blur"
            blurDataURL={srcImg}
            className={`object-cover absolute w-full h-full`}
          />
        </div>
        <div className={`pl-2 pr-2`}>
          <div className={`flex flex-col gap-4 mt-7 mb-7`}>
            <h2 className={`text-xl border-b-blue-950 font-semibold`}>{heading}</h2>
            <p className={`text-[13px] text-zinc-600`}>{paragraph}</p>
          </div>
          <div className={`flex justify-between`}>
            {type === `rent` && (
              <>
                <span className={`text-green-600 inline-block text-[18px] font-semibold`}>${total}<span className={`
                text-xs`}>/day</span></span>
              </>
            )}
            {type === `sell` && (
              <>
                <span className={`text-orange-500 inline-block text-[18px] font-semibold`}>${total}</span>
              </>
            )}
            <p className={`text-xs mb-9`}>{createdAt} days ago</p>
          </div>
          <ButtonLink href={href} buttonLabel={`See More`} animationPulse />
        </div>
      </div>
    </>
  );
}
