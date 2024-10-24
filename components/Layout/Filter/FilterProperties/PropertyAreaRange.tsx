// 'use client';

/*type PropertyAreaRangeType = {
  // children: ReactNode;
}*/

import Range from '@/components/UI/Input/Range';

export default function PropertyAreaRange(/*{  }: PropertyAreaRangeType*/) {
  return (
    <>
      <div className={`mt-6`}>
        <h2 className={`text-zinc-900 font-bold text-[16px] mb-3.5`}>Property area range</h2>
        <Range metric={`sqft`} name={`areaRange`} step={40} max={10000} maxFormatted={`10,000`} min={500} />
      </div>
    </>
  );
}
