// 'use client';

type BackgroundType = {
  active: boolean;
  // children: ReactNode;
}

import React from 'react';

export default function Background({ active }: BackgroundType) {
  return (
    <>
      <div id={`background`} className={`h-screen w-screen fixed bg-zinc-900/80 z-40 inset-0 ${!active ? `opacity-0 pointer-events-none 
      transition-all duration-200 translate-y-1/2` : `opacity-100 translate-y-0`}`}></div>
    </>
  );
}
