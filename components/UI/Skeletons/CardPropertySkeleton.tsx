// 'use client';

/*type CardPropertySkeletonType = {
  // children: ReactNode;
}*/

import { Skeleton, Tooltip } from '@mui/material';
import React from 'react';

export default function CardPropertySkeleton(/*{  }: CardPropertySkeletonType*/) {
  return (
    <Tooltip title={`The Data is loading. Please wait..`} followCursor>
      <div className={`flex flex-col min-w-72 max-w-80 transition-all duration-200 
                  hover:scale-95 hover:rotate-1`}>
        <div className={`rounded-3xl overflow-hidden`}>
          <Skeleton animation={`wave`} className={`rounded-3xl`} variant={`rectangular`} width={300} height={200} />
        </div>
        <div className={`pl-2 pr-3 overflow-hidden`}>
          <div className={`flex flex-col gap-4 mt-7 mb-4`}>
            <h2 className={`text-xl border-b-blue-950 font-semibold`}>
              <Skeleton variant={`text`} width={290} height={30} />
              <Skeleton variant={`text`} width={190} height={30} />
            </h2>
          </div>
          <div className={`mb-3`}>
            <Skeleton variant={`text`} width={250} height={20} />
            <Skeleton variant={`text`} width={130} height={20} />
          </div>
          <div className={`flex items-center justify-between mb-8`}>
            <Skeleton variant={`text`} width={150} />
            <Skeleton variant={`text`} width={50} />
          </div>
          <div>
            <Skeleton animation={`wave`} variant={`rounded`} width={200} height={60} />
          </div>
        </div>
      </div>
    </Tooltip>
  );
}
