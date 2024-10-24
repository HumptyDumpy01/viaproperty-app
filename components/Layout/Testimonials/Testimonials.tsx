// 'use client';

/*type CustomerTestimonialsType = {
  // children: ReactNode;
}*/

import HeadingAndLink from '@/components/UI/Link/HeadingAndLink';
import CustomerImg1 from '@/assets/home/customer-testimonials/customer-1.png';
import React from 'react';
import CustomerTestimonial from '@/components/Layout/Testimonials/CustomerTestimonial';
import MetricDisplayPositiveReviews from '@/components/UI/MetricDisplay/MetricDisplayPositiveReviews';

export default function Testimonials(/*{  }: CustomerTestimonialsType*/) {
  return (
    <>
      <div className={`flex bp-1165:flex-row flex-col bp-1165:gap-32 gap-10`}>
        <div className={`min-w-[590px] pr-36 border-r-4 border-r-zinc-300`}>
          <div className={`-mb-8`}>
            <HeadingAndLink heading={`we like to do things differently`} headingSpan={`what our customers think`}
                            headingCapitalized showLink={false} linkLabel={``} linkHref={``} />
          </div>
          <MetricDisplayPositiveReviews numbers={`271+`} />
        </div>
        <div>
          <CustomerTestimonial paragraph={(
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor
              incididunt ut labore et
              dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              . <br className={`mb-4`} /> Lorem
              ipsum dolor sit amet, <span
              className={`inline-block text-red-500 font-semibold`}>consectetur adipiscing elit, sed do</span> eiusmod
              tempor
              incididunt ut.
              Lorem ipsum dolor sit amet, consectetur adipiscing eli. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed!
            </>
          )} srcImg={CustomerImg1} status={`Entrepreneur`} AltImg={`Customer 1`} initials={`Brad Hunter`} />
        </div>
      </div>
    </>
  );
}
