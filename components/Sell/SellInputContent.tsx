'use client';

/*type SellInputContentType = {
  // children: ReactNode;
}*/

import BadgeStages from '@/components/UI/Badge/BadgeStages';
import { useState } from 'react';
import FirstForm from '@/components/Sell/FirstForm';
import { switchSteps } from '@/utils/functions/sell/switchSteps';
import SecondForm from '@/components/Sell/SecondForm';
import ThirdForm from '@/components/Sell/ThirdForm';
import FourthForm from '@/components/Sell/FourthForm';
import FifthForm from '@/components/Sell/FifthForm';

export type activeStateType = {
  stepOne: `disabled` | `active` | `completed`;
  stepTwo: `disabled` | `active` | `completed`;
  stepThree: `disabled` | `active` | `completed`;
  stepFour: `disabled` | `active` | `completed`;
  finishingSteps: `disabled` | `active` | `completed`;
};

export default function SellInputContent(/*{  }: SellInputContentType*/) {

  const [activeState, setActiveState] = useState<activeStateType>({
    stepOne: `active`,
    stepTwo: `disabled`,
    stepThree: `disabled`,
    stepFour: `disabled`,
    finishingSteps: `disabled`
  });

  const heading = activeState.stepOne === `active` ? `Fill in the most important!`
    : activeState.stepTwo === `active` ? `Add some details!`
      : activeState.stepThree === `active` ? `Good! Let's intersperse your advert with extras!`
        : activeState.stepFour === `active` ? `We are so close! Let's finish the advert!` : `Finally! Here are 
        finishing steps!`;

  return (
    <>
      <div className={`mb-7`}>
        <h2 className={`text-3xl bg-clip-text text-transparent bg-linear-main-red font-bold
          mb-5`}>{heading}</h2>
        <p className={`text-zinc-800`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi
          labore veritatis.</p>
      </div>

      <div className={`flex gap-2.5 items-center`}>
        <div onClick={activeState.stepOne === `completed` ? () => switchSteps(`stepOne`, setActiveState) : undefined}>
          <BadgeStages state={activeState.stepOne} label={`Step 1`} object={`stepOne`} />
        </div>
        <div onClick={activeState.stepTwo === `completed` ? () => switchSteps(`stepTwo`, setActiveState) : undefined}>
          <BadgeStages state={activeState.stepTwo} label={`Step 2`} object={`stepTwo`} />
        </div>
        <div
          onClick={activeState.stepThree === `completed` ? () => switchSteps(`stepThree`, setActiveState) : undefined}>
          <BadgeStages state={activeState.stepThree} label={`Step 3`} object={`stepThree`} />
        </div>
        <div onClick={activeState.stepFour === `completed` ? () => switchSteps(`stepFour`, setActiveState) : undefined}>
          <BadgeStages state={activeState.stepFour} label={`Step 4`} object={`stepFour`} />
        </div>
        <div
          onClick={activeState.stepFour === `completed` ? () => switchSteps(`finishingSteps`, setActiveState) : undefined}>
          <BadgeStages state={activeState.finishingSteps} label={`Finishing Steps`} object={`finishingSteps`} />
        </div>
      </div>
      {activeState.stepOne === `active` && <FirstForm setActiveState={setActiveState} />}
      {activeState.stepTwo === `active` && <SecondForm setActiveState={setActiveState} />}
      {activeState.stepThree === `active` && <ThirdForm setActiveState={setActiveState} />}
      {activeState.stepFour === `active` && <FourthForm setActiveState={setActiveState} />}
      {activeState.finishingSteps === `active` && <FifthForm setActiveState={setActiveState} />}
    </>
  );
}
