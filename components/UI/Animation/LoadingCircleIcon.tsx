'use client';

type LoadingCircleIconType = {
  // children: ReactNode;
} & ComponentPropsWithoutRef<'div'>;

import Lottie from 'lottie-react';
import JSONAnimationLoading from '@/animations/animation-loading.json';
import React, { ComponentPropsWithoutRef } from 'react';

export default function LoadingCircleIcon({ ...props }: LoadingCircleIconType) {
  return (
    <Lottie {...props} className={`w-96 h-96 mb-36`} animationData={JSONAnimationLoading} />
  );
}
