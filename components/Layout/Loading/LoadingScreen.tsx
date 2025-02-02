'use client';

/*type LoadingScreenType = {
  // children: ReactNode;
}*/

import React from 'react';
import LoadingCircleIcon from '@/components/UI/Animation/LoadingCircleIcon';

export default function LoadingScreen(/*{  }: LoadingScreenType*/) {
  return (
    <div className={`flex h-screen justify-center items-center`}>
      <LoadingCircleIcon className={`w-96 h-96 mb-36`} />
    </div>
  );
}
