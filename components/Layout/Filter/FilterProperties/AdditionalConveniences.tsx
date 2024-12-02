'use client';

/*type AdditionalConveniencesType = {
  // children: ReactNode;
}*/

import Checkbox from '@/components/UI/Checkbox/Checkbox';
import { useState } from 'react';

export default function AdditionalConveniences(/*{  }: AdditionalConveniencesType*/) {
  const [checkedStates, setCheckedStates] = useState({
    parkingSlot: true,
    elevator: true,
    fireplace: true,
    outdoorSpace: true,
    smartHomeFeatures: true,
    garden: true
  });
  return (
    <>
      <div className={`mt-7`}>
        <h2 className={`text-zinc-900 font-bold text-[16px] mb-3.5`}>Additional Conveniences</h2>

        <div className={`flex flex-col gap-2`}>
          <Checkbox
            checked={checkedStates.parkingSlot}
            name={`parkingSlot`}
            label={`Parking slot`} />
          <Checkbox
            checked={checkedStates.elevator}
            name={`elevator`} label={`Elevator`} />
          <Checkbox
            checked={checkedStates.fireplace}
            name={`fireplace`} label={`Fireplace`} />
          <Checkbox
            checked={checkedStates.outdoorSpace}
            name={`outdoorSpace`} label={`Outdoor Space`} />
          <Checkbox
            checked={checkedStates.smartHomeFeatures}
            name={`smartHomeFeatures`} label={`Smart Home Features`} />
          <Checkbox
            checked={checkedStates.garden}
            name={`garden`} label={`Garden`} />
        </div>
      </div>
    </>
  );
}
