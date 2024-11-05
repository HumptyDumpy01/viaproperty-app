// 'use client';

type AboutFirstColType = {
  text: string;
  metrics: { number: number, metric: string }[];
  // children: ReactNode;
}

import MetricDisplayNumbers from '@/components/UI/MetricDisplay/MetricDisplayNumbers';
import React from 'react';

export default function AboutCol({ text, metrics }: AboutFirstColType) {
  return (
    <>
      <div>
        <p className={`text-zinc-800 text-[15px] mb-5`}>{text}</p>
        {metrics.map(function(metric) {
          return (
            <div key={metric.metric} className={`mb-7`}>
              <MetricDisplayNumbers key={`${metric.metric}`} number={metric.number} metric={metric.metric} />
            </div>
          );
        })}
      </div>
    </>
  );
}
