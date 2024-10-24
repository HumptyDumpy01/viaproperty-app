// 'use client';

/*type PriceRangeType = {
  // children: ReactNode;
}*/

import Range from '@/components/UI/Input/Range';

export default function PriceRange(/*{  }: PriceRangeType*/) {
  return (
    <>
      <div className={`mt-6`}>
        <h2 className={`text-zinc-900 font-bold text-[16px] mb-3.5`}>Price range</h2>
        <Range metric={`dollars`} name={`pricingRange`} step={500} max={1988987} maxFormatted={`1,988,987`}
               min={3888} />
      </div>
    </>
  );
}
