// 'use client';

type HeadingType = {
  span: string;
  heading: string;
  // children: ReactNode;
}

import React from 'react';

export default function Heading({ span, heading }: HeadingType) {
  return (
    <>
      <div>
        <span className={`uppercase text-xs inline-block mb-2.5`}>{span}</span>
        <h2 className={`bg-clip-text text-5xl pb-2 font-bold text-transparent bg-linear-main-red mb-6`}>{heading}</h2>
      </div>
    </>
  );
}
