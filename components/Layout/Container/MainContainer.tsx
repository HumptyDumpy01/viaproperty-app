// 'use client';

import { ReactNode } from 'react';

type MainContainerType = {
  children: ReactNode;
}

export default function MainContainer({ children }: MainContainerType) {
  return (
    <>
      <main className={`overflow-hidden max-w-[1320px] mx-auto w-full px-3 bp-480:px-6`}>
        {children}
      </main>
    </>
  );
}
