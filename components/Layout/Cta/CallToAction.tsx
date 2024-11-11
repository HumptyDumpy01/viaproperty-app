// 'use client';

import Link from 'next/link';
import React from 'react';

type CallToActionType = {
  span: string;
  message: string;
  buttonLabel: string;
  href?: string;
  // children: ReactNode;
}

export default function CallToAction({ span, buttonLabel, message, href }: CallToActionType) {
  return (
    <>
      <div className={`border border-red-500 h-auto rounded-2xl flex items-center justify-center flex-col
                pb-4 mt-6`}>
                  <span className={`uppercase text-xl font-bold
                  text-center inline-block mt-5 mb-1.5 text-red-600`}>{span}</span>
        <p className={`text-red-600 text-[12px] text-center mb-5`}>{message}</p>
        <Link href={href ? href : `#`}
              className={`h-11 bg-linear-main-red rounded-full px-7 font-semibold text-white
          transition-all duration-200 hover:scale-105 flex items-center justify-center`}>{buttonLabel}</Link>
      </div>
    </>
  );
}
