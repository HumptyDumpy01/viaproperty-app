'use client';

/*type SearchingForType = {
  // children: ReactNode;
}*/

import Checkbox from '@/components/UI/Checkbox/Checkbox';
import { useState } from 'react';

export default function SearchingFor(/*{  }: SearchingForType*/) {
  const [checkedState, setCheckedState] = useState({
    buy: true,
    rent: true
  });

  return (
    <>
      <div className={`mt-4`}>
        <h2 className={`text-zinc-900 font-bold text-[16px] mb-3.5`}>Searching for</h2>
        <div className={`flex flex-col gap-2`}>
          <Checkbox checked={checkedState.buy} name={`buy`} label={`Buying Property`} />
          <Checkbox checked={checkedState.rent} name={`rent`} label={`Renting Property`} />
        </div>
      </div>
    </>
  );
}
