// 'use client';

import HeadingAndLink from '@/components/UI/Link/HeadingAndLink';
import React, { ReactNode } from 'react';

type CardSliderType = {
  showHeading?: boolean;
  heading?: string;
  headingSpan?: string;
  linkLabel?: string;
  linkHref?: string;
  children: ReactNode;
}
export default function CardSlider({
                                     heading,
                                     showHeading,
                                     headingSpan,
                                     linkLabel,
                                     linkHref,
                                     children
                                   }: CardSliderType) {

  if (showHeading && (!headingSpan || !heading || !linkHref || !linkLabel)) {
    throw new Error('You must provide heading, headingSpan, linkHref and linkLabel');
  }

  return (
    <>
      <div className={`max-w-7xl mx-auto w-full`}>
        {showHeading && (headingSpan && heading && linkHref && linkLabel) && (
          <>
            <HeadingAndLink heading={heading} headingSpan={headingSpan}
                            linkLabel={linkLabel}
                            linkHref={linkHref} />
          </>
        )}
        <div className={`flex gap-7 overflow-x-auto overflow-y-hidden pb-8 scrollbar-thin`}>
          {children}
        </div>
      </div>
    </>
  );
}
