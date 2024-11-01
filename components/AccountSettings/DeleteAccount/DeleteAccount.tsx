'use client';

/*type DeleteAccountType = {
  // children: ReactNode;
}*/

import { useState } from 'react';
import BadgeStages from '@/components/UI/Badge/BadgeStages';
import HighlightText from '@/components/Typography/HighlightText';
import Paragraph from '@/components/Typography/Paragraph';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import Button from '@/components/UI/Button/Button';
import BigInput from '@/components/UI/Input/BigInput';

export type DeleteAccountStagesType = {
  stepOne: 'disabled' | 'active' | 'completed';
  stepTwo: 'disabled' | 'active' | 'completed';
  done: 'disabled' | 'active' | 'completed';
}

export default function DeleteAccount(/*{  }: DeleteAccountType*/) {

  const [activeState, setActiveState] = useState<DeleteAccountStagesType>({
    stepOne: 'active',
    stepTwo: 'disabled',
    done: 'disabled'
  });

  const handleBadgeClick = (currentStep: keyof DeleteAccountStagesType, nextStep: keyof DeleteAccountStagesType) => {
    setActiveState(prevState => ({
      ...prevState,
      [currentStep]: 'completed',
      [nextStep]: 'active'
    }));
  };
  return (
    <div>
      <h2
        className={`bg-clip-text text-transparent bg-linear-main-red
         font-bold text-4xl max-w-screen-bp-620 leading-tight mb-8`}>Are
        you sure you want
        to delete your Account?</h2>

      <div className={`flex gap-2.5 items-center overflow-x-auto scrollbar-thin mb-7`}>
        <div>
          <BadgeStages state={activeState.stepOne} label={`Step 1`} object={`stepOne`} />
        </div>
        <div>
          <BadgeStages state={activeState.stepTwo} label={`Step 2`} object={`stepTwo`} />
        </div>
        <div>
          <BadgeStages state={activeState.done} label={`Done`} object={`finishingSteps`} />
        </div>
      </div>
      <Paragraph customClasses={`max-w-screen-bp-790`} text={(
        <>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore, fuga fugit id <HighlightText text={`minus quasi quia sequi
        soluta tempora veritatis!`} />
        </>
      )} />

      <div className={`mt-9 mb-5`}>
        <ErrorMessage errorMessage={`Passwords do not match!`} />
      </div>
      {activeState.stepOne === `active` && (
        <div>
          <form className={`flex items-center gap-5`}>
            <BigInput placeholder={`Enter your old password`} name={`oldPassword`} type={`password`} />
            <div onClick={() => handleBadgeClick(`stepOne`, `stepTwo`)}>
              <Button type={`button`} label={`Verify`} mode={`lg`} linearGradient />
            </div>
          </form>
        </div>
      )}

      {activeState.stepTwo === `active` && (
        <div className={`mt-5`}>
          <form className={`flex items-center gap-5`}>
            <BigInput placeholder={`6-digit code`} name={`code`} type={`password`} />
            <div onClick={() => handleBadgeClick(`stepTwo`, `done`)}>
              <Button type={`button`} label={`Confirm`} mode={`lg`} linearGradient />
            </div>
          </form>
        </div>
      )}

      {activeState.done === `active` && (
        <>
          <h1 className={`bg-clip-text text-transparent bg-linear-main-red font-bold
          text-4xl max-w-screen-bp-620 leading-tight mb-8`}>Account was successfully
            Deleted!</h1>
          <Paragraph customClasses={`max-w-screen-bp-790`} text={(
            <>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore, fuga fugit id <HighlightText
              text={`minus quasi quia sequi
        soluta tempora veritatis!`} />
            </>
          )} />
        </>
      )}
    </div>
  );
}
