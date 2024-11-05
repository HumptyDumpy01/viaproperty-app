'use client';

/*type OrderConfirmedAnimationType = {
  // children: ReactNode;
}*/

import AnimationOrderConfirmed from '@/animations/animation-order-is-confirmed.json';
import Lottie from 'lottie-react';

export default function OrderConfirmedAnimation(/*{  }: OrderConfirmedAnimationType*/) {
  return (
    <>
      <div className={`max-w-2xl`}>
        <Lottie animationData={AnimationOrderConfirmed} />
      </div>
    </>
  );
}
