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
            onClick={() => setCheckedStates(prevState => ({
              ...prevState,
              parkingSlot: !prevState.parkingSlot
            }))}
            checked={checkedStates.parkingSlot}
            name={`parkingSlot`}
            label={`Parking slot`} />
          <Checkbox
            onClick={() => setCheckedStates(prevState => ({
              ...prevState,
              elevator: !prevState.elevator
            }))}
            checked={checkedStates.elevator}
            name={`elevator`} label={`Elevator`} />
          <Checkbox
            onClick={() => setCheckedStates(prevState => ({
              ...prevState,
              fireplace: !prevState.fireplace
            }))}
            checked={checkedStates.fireplace}
            name={`fireplace`} label={`Fireplace`} />
          <Checkbox
            onClick={() => setCheckedStates(prevState => ({
              ...prevState,
              outdoorSpace: !prevState.outdoorSpace
            }))}
            checked={checkedStates.outdoorSpace}
            name={`outdoorSpace`} label={`Outdoor Space`} />
          <Checkbox
            onClick={() => setCheckedStates(prevState => ({
              ...prevState,
              smartHomeFeatures: !prevState.smartHomeFeatures
            }))}
            checked={checkedStates.smartHomeFeatures}
            name={`smartHomeFeatures`} label={`Smart Home Features`} />
          <Checkbox
            onClick={() => setCheckedStates(prevState => ({
              ...prevState,
              garden: !prevState.garden
            }))}
            checked={checkedStates.garden}
            name={`garden`} label={`Garden`} />
        </div>
      </div>
    </>
  );
}
