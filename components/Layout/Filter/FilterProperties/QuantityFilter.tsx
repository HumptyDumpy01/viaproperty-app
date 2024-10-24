// 'use client';

/*type QuantityFilterType = {
  // children: ReactNode;
}*/

import SelectQuantity from '@/components/UI/Input/SelectQuantity';

export default function QuantityFilter(/*{  }: QuantityFilterType*/) {
  return (
    <>
      <div className={`mt-7 flex items-center gap-10`}>
        <div>
          <h3 className={`text-zinc-900 font-bold text-[16px] mb-6`}>Bedrooms</h3>
          <SelectQuantity />
        </div>
        <div>
          <h3 className={`text-zinc-900 font-bold text-[16px] mb-6`}>Bathrooms</h3>
          <SelectQuantity type={`light`} />
        </div>
      </div>
    </>
  );
}
