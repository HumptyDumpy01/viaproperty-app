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
import CustomApolloProvider from '@/components/Layout/Provider/ApolloProvider';

export type ForgotPasswordStatesType = {
  stepOne: 'disabled' | 'active' | 'completed';
  stepTwo: 'disabled' | 'active' | 'completed';
  stepThree: 'disabled' | 'active' | 'completed';
  done: 'disabled' | 'active' | 'completed';
}

// export type ForgotPasswordType = {}

export default function ForgotPassword(/*{ setActivePage }: ForgotPasswordType*/) {
  const [enteredEmail, setEnteredEmail] = useState(``);
  const [enteredToken, setEnteredToken] = useState(``);
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
    <CustomApolloProvider>
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
          <p className={`leading-relaxed text-zinc-800`}>
            Please enter your email to reset your password. We will send you a verification code to your email. After
            that
            proceed further with the next steps to set a new password.
          </p>
        </div>
        <div className={`mt-6`}>
          {activeState.stepOne === 'active' &&
            <VerificationEmailForm enteredEmail={{ value: enteredEmail, setValue: setEnteredEmail }}
                                   handleBadgeClick={() => handleBadgeClick('stepOne', 'stepTwo')} />}

          {activeState.stepTwo === 'active' &&
            <EnterVerificationCodeForm handleBadgeClickValue={`stepThree`}
                                       handleGoBackFunc={() => handleBadgeClick(`stepTwo`, `stepOne`)}
                                       enteredTokenState={{
                                         enteredToken: enteredToken, setEnteredToken: setEnteredToken
                                       }} userEmail={enteredEmail}
                                       handleBadgeClick={() => handleBadgeClick('stepTwo', 'stepThree')} />}
          {activeState.stepThree === 'active' &&
            <EnterNewPasswordForm userEmail={enteredEmail} enteredToken={enteredToken}
                                  handleBadgeClick={() => handleBadgeClick('stepThree', 'done')} />}

          {activeState.done === 'active' && (
            <TryToSignin />
          )}
        </div>
      </div>
    </CustomApolloProvider>
  );
}