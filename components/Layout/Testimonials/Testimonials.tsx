'use client';

import React from 'react';
// @ts-ignore
import Slider from 'react-slick';
import HeadingAndLink from '@/components/UI/Link/HeadingAndLink';
import CustomerImg1 from '@/assets/home/customer-testimonials/customer-1.png';
import CustomerImg2 from '@/assets/home/customer-testimonials/customer-2.png';
import CustomerImg3 from '@/assets/home/customer-testimonials/customer-3.png';
import CustomerImg4 from '@/assets/home/customer-testimonials/customer-4.png';
import CustomerTestimonial from '@/components/Layout/Testimonials/CustomerTestimonial';
import MetricDisplayPositiveReviews from '@/components/UI/MetricDisplay/MetricDisplayPositiveReviews';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Testimonials(/*{  }: CustomerTestimonialsType*/) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true
  };

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
        <div className={`w-full`}>
          <Slider {...settings}>
            <CustomerTestimonial paragraph={(
              <>
                Viaproperty exceeded my expectations in every way. Their team was professional, knowledgeable, and
                always available to answer my questions.
                <br className={`mb-4`} /> I found the perfect home thanks to their dedication and expertise. I highly
                recommend their services to anyone in the market for a new property.
              </>
            )} srcImg={CustomerImg1} status={`Entrepreneur`} AltImg={`Customer 1`} initials={`Brad Hunter`} />
            <CustomerTestimonial paragraph={(
              <>
                Viaproperty made the process of finding a new home so easy and stress-free. Their team was incredibly
                helpful and responsive.
                <br className={`mb-4`} /> I highly recommend them to anyone looking for a new place to live.
              </>
            )} srcImg={CustomerImg2} status={`Software Engineer`} AltImg={`Customer 2`} initials={`Alice Johnson`} />
            <CustomerTestimonial paragraph={(
              <>
                I was impressed with the level of service and attention to detail provided by viaproperty. They truly
                care about their clients.
                <br className={`mb-4`} /> I found the perfect property thanks to their expertise.
              </>
            )} srcImg={CustomerImg3} status={`Marketing Manager`} AltImg={`Customer 3`} initials={`John Smith`} />
            <CustomerTestimonial paragraph={(
              <>
                The team at viaproperty went above and beyond to help me find my dream home. Their knowledge of the
                market is unmatched.
                <br className={`mb-4`} /> I couldn&#39;t be happier with my experience.
              </>
            )} srcImg={CustomerImg4} status={`Designer`} AltImg={`Customer 4`} initials={`Emily Davis`} />
          </Slider>
        </div>
      </div>
    </>
  );
}