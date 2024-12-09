'use client';

/*type LoadingScreenType = {
  // children: ReactNode;
}*/

import Lottie from 'lottie-react';
import JSONAnimationLoading from '@/animations/animation-loading.json';
import React from 'react';

export default function LoadingScreen(/*{  }: LoadingScreenType*/) {
  return (
    <div className={`flex h-screen justify-center items-center`}>
      <Lottie className={`w-96 h-96 mb-36`} animationData={JSONAnimationLoading} />
    </div>
  );
}
