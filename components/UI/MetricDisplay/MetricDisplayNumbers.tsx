// 'use client';

type MetricDisplayNumbersType = {
  number: number;
  metric: string;
  // children: ReactNode;
}

import React from 'react';

export default function MetricDisplayNumbers({ number, metric }: MetricDisplayNumbersType) {
  return (
    <>
      <div>
        <span
          className={`bg-clip-text bp-620:text-[136px] text-9xl font-bold text-transparent bg-linear-main-red mb-6
          inline-block border-b-2 border-zinc-300 w-full`}>{number}</span>
        <h3 className={`bp-620:text-3xl mb-9 bp-620:mb-0 text-2xl uppercase font-bold text-zinc-800`}>{metric}</h3>
      </div>
    </>
  );
}
