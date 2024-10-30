'use client';

/*type SellPageType = {
  // children: ReactNode;
}*/

import BadgeStages from '@/components/UI/Badge/BadgeStages';
import { useState } from 'react';

type activeStateType = {
  stepOne: `disabled` | `active` | `completed`;
  stepTwo: `disabled` | `active` | `completed`;
  stepThree: `disabled` | `active` | `completed`;
  stepFour: `disabled` | `active` | `completed`;
  finishingSteps: `disabled` | `active` | `completed`;
};

export default function SellPage(/*{  }: SellPageType*/) {
  const [activeState, setActiveState] = useState<activeStateType>({
    stepOne: `active`,
    stepTwo: `disabled`,
    stepThree: `disabled`,
    stepFour: `disabled`,
    finishingSteps: `disabled`
  });
  return (
    <main className={`overflow-hidden mt-6`}>
      <div className={`max-w-[1320px] mx-auto w-full px-3 bp-480:px-6`}>
        <h1 className={`bg-clip-text text-transparent bg-linear-main-red font-bold
        text-[40px] mb-3.5 `}>Let’s Start Selling!</h1>
        <p className={`max-w-4xl leading-relaxed mb-6 text-[15px]`}>Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Dolor
          ducimus earum facilis maxime numquam
          provident
          quam quis reprehenderit. Adipisci amet consectetur cum delectus id ipsam minus omnis quaerat, quibusdam
          quidem?</p>
        <div className={`flex gap-2.5 items-center`}>
          <BadgeStages state={activeState.stepOne} label={`Step 1`} object={`stepOne`} />
          <BadgeStages state={activeState.stepTwo} label={`Step 2`} object={`stepTwo`} />
          <BadgeStages state={activeState.stepThree} label={`Step 3`} object={`stepThree`} />
          <BadgeStages state={activeState.stepFour} label={`Step 4`} object={`stepFour`} />
          <BadgeStages state={activeState.finishingSteps} label={`Finishing Steps`} object={`finishingSteps`} />

        </div>
      </div>
    </main>
  );
}
