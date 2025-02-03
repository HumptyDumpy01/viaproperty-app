'use client';

/*type ForgotPasswordType = {
  // children: ReactNode;
}*/

import { useState } from 'react';
import BadgeStages from '@/components/UI/Badge/BadgeStages';
import VerificationEmailForm from '@/components/Auth/ForgotPassword/VerificationEmailForm';
import EnterVerificationCodeForm from '@/components/Auth/ForgotPassword/EnterVerificationCodeForm';
import EnterNewPasswordForm from '@/components/Auth/ForgotPassword/EnterNewPasswordForm';
import TryToSignin from '@/components/Auth/ForgotPassword/TryToSignin';

export type ForgotPasswordStatesType = {
  stepOne: 'disabled' | 'active' | 'completed';
  stepTwo: 'disabled' | 'active' | 'completed';
  stepThree: 'disabled' | 'active' | 'completed';
  done: 'disabled' | 'active' | 'completed';
}

// export type ForgotPasswordType = {}

export default function ForgotPassword(/*{ setActivePage }: ForgotPasswordType*/) {
  const [activeState, setActiveState] = useState<ForgotPasswordStatesType>({
    stepOne: 'active',
    stepTwo: 'disabled',
    stepThree: 'disabled',
    done: 'disabled'
  });

  const handleBadgeClick = (currentStep: keyof ForgotPasswordStatesType, nextStep: keyof ForgotPasswordStatesType) => {
    setActiveState(prevState => ({
      ...prevState,
      [currentStep]: 'completed',
      [nextStep]: 'active'
    }));
  };

  return (
    <div className={`max-w-4xl`}>
      <div className={`flex gap-2.5 items-center overflow-x-auto scrollbar-thin mb-7`}>
        <div>
          <BadgeStages state={activeState.stepOne} label={`Step 1`} object={`stepOne`} />
        </div>
        <div>
          <BadgeStages state={activeState.stepTwo} label={`Step 2`} object={`stepTwo`} />
        </div>
        <div>
          <BadgeStages state={activeState.stepThree} label={`Step 3`} object={`stepThree`} />
        </div>
        <div>
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
      <div className={`mt-6`}>
        {activeState.stepOne === 'active' &&
          <VerificationEmailForm handleBadgeClick={() => handleBadgeClick('stepOne', 'stepTwo')} />}

        {activeState.stepTwo === 'active' &&
          <EnterVerificationCodeForm enteredTokenState={{
            enteredToken: ``, setEnteredToken: () => {
            }
          }} userEmail={`empty.string@example.com`}
                                     handleBadgeClick={() => handleBadgeClick('stepTwo', 'stepThree')} />}

        {activeState.stepThree === 'active' &&
          <EnterNewPasswordForm userEmail={'123'} enteredToken={''}
                                handleBadgeClick={() => handleBadgeClick('stepThree', 'done')} />}

        {activeState.done === 'active' && (
          <TryToSignin />
        )}
      </div>
    </div>
  );
}