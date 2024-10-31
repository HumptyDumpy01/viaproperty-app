'use client';

/*type ForgotPasswordType = {
  // children: ReactNode;
}*/

import { useState } from 'react';
import BadgeStages from '@/components/UI/Badge/BadgeStages';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import Button from '@/components/UI/Button/Button';

export type ForgotPasswordStatesType = {
  stepOne: 'disabled' | 'active' | 'completed';
  stepTwo: 'disabled' | 'active' | 'completed';
  stepThree: 'disabled' | 'active' | 'completed';
  done: 'disabled' | 'active' | 'completed';
}

export default function ForgotPassword(/*{  }: ForgotPasswordType*/) {
  const [activeState, setActiveState] = useState<ForgotPasswordStatesType>({
    stepOne: 'active',
    stepTwo: 'disabled',
    stepThree: 'disabled',
    done: 'disabled'
  });

  const handleBadgeClick = (step: keyof ForgotPasswordStatesType) => {
    if (activeState[step] === 'completed') {
      setActiveState(prevState => ({
        ...prevState,
        stepOne: step === 'stepOne' ? 'active' : 'disabled',
        stepTwo: step === 'stepTwo' ? 'active' : 'disabled',
        stepThree: step === 'stepThree' ? 'active' : 'disabled',
        done: step === 'done' ? 'active' : 'disabled'
      }));
    }
  };

  return (
    <div className={`max-w-4xl`}>
      <div className={`flex gap-2.5 items-center overflow-x-auto scrollbar-thin mb-7`}>
        <div onClick={() => handleBadgeClick('stepOne')}>
          <BadgeStages state={activeState.stepOne} label={`Step 1`} object={`stepOne`} />
        </div>
        <div onClick={() => handleBadgeClick('stepTwo')}>
          <BadgeStages state={activeState.stepTwo} label={`Step 2`} object={`stepTwo`} />
        </div>
        <div onClick={() => handleBadgeClick('stepThree')}>
          <BadgeStages state={activeState.stepThree} label={`Step 3`} object={`stepThree`} />
        </div>
        <div onClick={() => handleBadgeClick('done')}>
          <BadgeStages state={activeState.done} label={`Finishing Steps`} object={`finishingSteps`} />
        </div>
      </div>
      <div>
        <p className={`leading-relaxed text-zinc-800`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
          incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. </p>
      </div>
      <div className={`mt-7`}>
        <ErrorMessage errorMessage={`Incorrect email!`} />
      </div>

      <div className={`mt-6`}>
        <form className={`flex justify-center flex-col w-[412px]`}>
          <div className={`flex w-full mb-11`}>
            <LabelAndInput labelStyle={`dark-blue`} name={`email`} placeholder={`Enter your email`}
                           customClassNames={`w-full`} label={`Email`}
                           inputType={`email`} required />
          </div>

          <Button btnVariant={`dark-blue`} mode={`lg`} type={`button`} label={`Send Verification Code`}
            // @ts-ignore
                  onClick={() => handleBadgeClick(`stepTwo`)} />
        </form>
      </div>

    </div>
  );
}