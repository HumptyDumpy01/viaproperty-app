// 'use client';

/*type CardPropertyHorizontalSkeletonType = {
  // children: ReactNode;
}*/

import React from 'react';
import { Skeleton } from '@mui/material';

export default function CardPropertyHorizontalSkeleton(/*{  }: CardPropertyHorizontalSkeletonType*/) {
  return (
    <>
      <div className={`flex flex-col bp-620:flex-row gap-6 items-center`}>
        <div className={`flex justify-center rounded-3xl`}>
          <Skeleton animation={`wave`} className={`object-cover rounded-3xl overflow-hidden`} height={250}
                    width={160} />
        </div>
        <div className={`flex  flex-col w-1/2`}>
          <h3>
            <Skeleton width={`110%`} height={40} />
          </h3>
          <p className={`text-slate-600 text-[13px] mb-4`}>
            <Skeleton width={200} height={20} />
            <Skeleton width={170} height={20} />
          </p>
          <div className={`flex justify-between`}>
            <div>
              <Skeleton width={50} height={20} />
            </div>
            <div>
              <Skeleton width={100} height={20} />
            </div>
          </div>
          <div className={`mt-4 flex items-center gap-14`}>
            <div>
              <Skeleton width={100} height={50} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
