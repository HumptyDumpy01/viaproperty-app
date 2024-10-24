// 'use client';

type CardLinkType = {
  href: string;
  srcImg: StaticImageData;
  altImg: string;
  heading: string;
  metric: number;
  metricText: string;
  // children: ReactNode;
}

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function CardLink({ heading, altImg, srcImg, metricText, metric, href }: CardLinkType) {
  return (
    <>
      <Link href={href} className={`flex flex-col group transition-all duration-200 
      hover:scale-90`}>
        <Image className={`mb-6`} src={srcImg} alt={altImg} />
        <div className={`text-center`}>
          <h3 className={`text-red-600 font-bold text-3xl mb-3
          group-hover:text-zinc-900 transition-all duration-200`}>{heading}</h3>
          <p className={`text-zinc-400 font-medium`}><span>{metric}</span> {metricText}</p>
        </div>
      </Link>
    </>
  );
}
