// 'use client';

type CardPropertyTwoType = {
  href: string;
  srcImg: StaticImageData;
  altImg: string;
  location: string;
  paragraph: string;
  total: string;
  btnLinkHref: string;
  btnLinkLabel: string;
  // children: ReactNode;
}

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import ButtonLink from '@/components/UI/Button/ButtonLink';
import React from 'react';

export default function
  CardPropertyTwo({
                    srcImg,
                    altImg,
                    btnLinkHref,
                    btnLinkLabel,
                    href,
                    total,
                    paragraph,
                    location
                  }: CardPropertyTwoType) {
  return (
    <>
      <Link href={href} className={`flex flex-col gap-6 max-w-80 group
      transition-all duration-300 hover:scale-110`}>
        <div className={`relative`}>
          <Image src={srcImg} alt={altImg} width={300} height={200} />

          <div
            className={`absolute h-11 py-2 bg-sky-950 rounded-xl flex items-center justify-center top-5 left-5 font-bold
                  text-white px-5 text-sm`}>
            <p>From <span className={`inline-block`}>{total}</span>$</p>
          </div>
        </div>
        <div className={`flex flex-col`}>
          <h2 className={`uppercase text-zinc-900 font-semibold text-[15px] mb-4`}>{location}</h2>
          <p className={`text-zinc-600 text-sm mb-5`}>{paragraph}</p>

          <div className={`group-hover:animate-pulse`}>
            <ButtonLink href={btnLinkHref} buttonLabel={btnLinkLabel} animationPulse />
          </div>
        </div>
      </Link>
    </>
  );
}
