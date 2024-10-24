// 'use client';

type HeadingType = {
  span: string;
  heading: string;
  headingCapitalized?: boolean;
  // children: ReactNode;
}

import React from 'react';

export default function Heading({ span, heading, headingCapitalized = false }: HeadingType) {
  return (
    <>
      <div>
        <span className={`uppercase text-xs inline-block mb-2.5`}>{span}</span>
        <h2 className={`bg-clip-text text-5xl pb-2 font-bold text-transparent bg-linear-main-red bp-620:mb-6
        leading-tight ${headingCapitalized ? `uppercase` : ``}`}>{heading}</h2>
      </div>
    </>
  );
}
