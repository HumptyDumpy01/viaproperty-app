'use client';

type RangeType = {
  min: number | string;
  max: number;
  step: number;
  name: string;
  maxFormatted: string;
  metric: `sqft` | `dollars`;
  // children: ReactNode;
}

import { ChangeEvent, useState } from 'react';

export default function Range({ min, max, maxFormatted, step, name, metric }: RangeType) {
  const [priceRange, setPriceRange] = useState(max);

  const handleRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(event.target.value));
  };

  return (
    <>
      <div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          name={name}
          value={priceRange}
          onChange={handleRangeChange}
          className={`w-full accent-zinc-900`}
        />
        <div className={`flex items-center justify-between gap-2 text-zinc-600 text-[14px] mt-2`}>
              <span
                className={`bg-zinc-100 px-4 py-1 text-[13px] rounded text-zinc-900 font-medium`}>
                {metric === `dollars` ? `$${priceRange}` : `${priceRange}`}</span>
          <span
            className={`bg-zinc-100 px-4 py-1 text-[13px] rounded text-zinc-900 font-medium`}>
            {metric === `dollars` ? `$${maxFormatted}` : `${maxFormatted}sqft`}</span>
          {/*<button className={`text-white font-semibold uppercase bg-linear-main-red p-1 px-2 rounded`}>ok</button>*/}
        </div>
      </div>
    </>
  );
}
