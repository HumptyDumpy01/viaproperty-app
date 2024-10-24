// 'use client';

/*type CustomerTestimonialsType = {
  // children: ReactNode;
}*/

import React from 'react';
import Testimonials from '@/components/Layout/Testimonials/Testimonials';

export default function CustomerTestimonials(/*{  }: CustomerTestimonialsType*/) {
  return (
    <>
      <section className={`mb-14`}>
        <div className={`max-w-7xl mx-auto w-full`}>
          <Testimonials />
        </div>
      </section>
    </>
  );
}
