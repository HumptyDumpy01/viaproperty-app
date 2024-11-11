// 'use client';

/*type CardPropertyTwoType = {
  // children: ReactNode;
}*/

import { Skeleton } from '@mui/material';
import React from 'react';

export default function CardPropertyTwoSkeleton(/*{  }: CardPropertyTwoType*/) {
  return (
    <>
      <div>
        <div className={`flex flex-col max-w-80 group
                  transition-all duration-300 hover:scale-110`}>
          <div className={`relative rounded-3xl overflow-hidden w-80 h-80 -mb-20`}>
            <Skeleton className={`rounded-3xl absolute object-cover`} width={290} height={320}
                      variant={`rectangular`} />
            <div
              className={`absolute h-11 py-2 bg-zinc-300 rounded-xl flex items-center justify-center top-5 left-5 font-bold
                  text-white px-5 text-sm`}>
              <p><span className={`inline-block`}>Loading...</span></p>
            </div>
          </div>
          <div className={`flex flex-col mt-24`}>
            <p className={`text-zinc-600 text-sm mb-5 flex justify-center flex-col`}>
              <Skeleton width={280} height={40} />
              <Skeleton width={230} height={40} />
            </p>

            <div className={`group-hover:animate-pulse`}>
              <Skeleton width={200} height={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
