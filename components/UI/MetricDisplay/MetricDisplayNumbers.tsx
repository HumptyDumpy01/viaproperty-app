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
          className={`bg-clip-text text-[136px] font-bold text-transparent bg-linear-main-red mb-6
          inline-block border-b-2 border-zinc-300 w-full`}>{number}</span>
        <h3 className={`text-3xl uppercase font-bold text-zinc-800`}>{metric}</h3>
      </div>
    </>
  );
}
