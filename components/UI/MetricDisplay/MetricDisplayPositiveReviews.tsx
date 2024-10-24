// 'use client';

type MetricDisplayPositiveReviewsType = {
  numbers: string;
  // children: ReactNode;
}

import Image from 'next/image';
import CustomerImg1 from '@/assets/home/customer-testimonials/customer-1.png';
import CustomerImg2 from '@/assets/home/customer-testimonials/customer-2.png';
import CustomerImg3 from '@/assets/home/customer-testimonials/customer-3.png';
import CustomerImg4 from '@/assets/home/customer-testimonials/customer-4.png';
import React from 'react';

export default function MetricDisplayPositiveReviews({ numbers }: MetricDisplayPositiveReviewsType) {
  return (
    <>
      <div className={`flex items-center`}>
        <Image className={`w-14 h-14 -mr-4`} src={CustomerImg1} alt={`Customer Image 1`} />
        <Image className={`w-14 h-14 -mr-4`} src={CustomerImg2} alt={`Customer Image 2`} />
        <Image className={`w-14 h-14 -mr-4`} src={CustomerImg3} alt={`Customer Image 3`} />
        <Image className={`w-14 h-14 -mr-4`} src={CustomerImg4} alt={`Customer Image 4`} />
        <p className={`ml-8`}><span className={`font-semibold text-zinc-700`}>{numbers}</span> more positive reviews
        </p>
      </div>
    </>
  );
}
