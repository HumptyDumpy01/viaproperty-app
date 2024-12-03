'use client';

import SelectQuantity from '@/components/UI/Input/SelectQuantity';
import { useState } from 'react';

export default function QuantityFilter() {
  const [quantityStates, setQuantityStates] = useState({
    beds: 0,
    bathrooms: 0
  });

  return (
    <>
      <div className={`mt-7 flex items-center gap-10`}>
        <div>
          <h3 className={`text-zinc-900 font-bold text-[16px] mb-6`}>Beds</h3>
          <SelectQuantity property={`beds`} setQuantityStates={setQuantityStates} quantity={quantityStates}
                          type={`light`} />
        </div>
        <div>
          <h3 className={`text-zinc-900 font-bold text-[16px] mb-6`}>Bathrooms</h3>
          <SelectQuantity property={`bathrooms`} setQuantityStates={setQuantityStates} quantity={quantityStates}
                          type={`light`} />
        </div>
      </div>
    </>
  );
}