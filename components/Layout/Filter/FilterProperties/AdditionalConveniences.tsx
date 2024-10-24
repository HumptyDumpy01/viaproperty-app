// 'use client';

/*type AdditionalConveniencesType = {
  // children: ReactNode;
}*/

import Checkbox from '@/components/UI/Checkbox/Checkbox';

export default function AdditionalConveniences(/*{  }: AdditionalConveniencesType*/) {
  return (
    <>
      <div className={`mt-7`}>
        <h2 className={`text-zinc-900 font-bold text-[16px] mb-3.5`}>Additional Conveniences</h2>

        <div className={`flex flex-col gap-2`}>
          <Checkbox name={`parkingSlot`} label={`Parking slot`} />
          <Checkbox name={`elevator`} label={`Elevator`} />
          <Checkbox name={`fireplace`} label={`Fireplace`} />
          <Checkbox name={`outdoorSpace`} label={`Outdoor Space`} />
          <Checkbox name={`smartHomeFeatures`} label={`Smart Home Features`} />
          <Checkbox name={`garden`} label={`Garden`} />
        </div>
      </div>
    </>
  );
}
