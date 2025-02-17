// 'use client';

import { ForgotPasswordStatesType } from '@/components/Auth/ForgotPassword/ForgotPassword';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import Button from '@/components/UI/Button/Button';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import React, { useState } from 'react';
import { enterTokenSchema } from '@/utils/schemas/auth/enterTokenSchema';
import BackdropMUI from '@/components/UI/Backdrop/BackdropMUI';
import { useValidateChangePasswordToken } from '@/hooks/mutations/useValidateChangePasswordToken';

type EnterVerificationCodeFormType = {
  handleBadgeClick: (step: keyof ForgotPasswordStatesType) => void;
  handleGoBackFunc?: () => void;
  userEmail: string;
  enteredTokenState: {
    enteredToken: string;
    setEnteredToken: React.Dispatch<React.SetStateAction<string>>;
  },
  handleBadgeClickValue: string;
  // children: ReactNode;
}
export default function
  EnterVerificationCodeForm({
                              handleBadgeClick,
                              userEmail,
                              handleGoBackFunc,
                              enteredTokenState,
                              handleBadgeClickValue
                            }: EnterVerificationCodeFormType) {
  const { enteredToken, setEnteredToken } = enteredTokenState;
  const [errorMessage, setErrorMessage] = useState(``);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const { validateChangePasswordToken, loading } = useValidateChangePasswordToken();

  async function handleConfirmToken() {
    if (enteredToken.trim() === `` || isNaN(Number(enteredToken))) {
      console.log('Not number');
      return;
    }

    const validate = enterTokenSchema.safeParse({ token: enteredToken });

    if (!validate.success) {
      setErrorMessage(validate.error.errors[0].message);
      return;
    }
    setBackdropOpen(() => true);

    setErrorMessage(() => ``);
    const response = await validateChangePasswordToken({ email: userEmail, token: enteredToken });

    if (response?.data?.message) {
      setErrorMessage(() => response?.data?.message);
      setBackdropOpen(() => false);
    }

    const tokenIsValid = response?.data?.validateToken?.tokenIsValid;

    if (tokenIsValid) {
      // @ts-ignore
      handleBadgeClick(handleBadgeClickValue);
      setBackdropOpen(() => false);

    } else {
      setErrorMessage(() => `Invalid token entered or expired.`);
      setBackdropOpen(() => false);
    }
  }

  function handleGoBack() {
    if (handleGoBackFunc) {
      handleGoBackFunc();
    }
  }

  return (
    <>
      <BackdropMUI state={{ open: backdropOpen, setOpen: setBackdropOpen }}
                   alertMessage={`Please wait util we validate the token..`} />
      {errorMessage && (
        <div className={`mt-7 mb-6`}>
          <ErrorMessage errorMessage={errorMessage} />
          <button onClick={handleGoBack} className={`p-2 text-sm text-zinc-800 
          transition-all hover:animate-pulse duration-200 hover:underline hover:underline-offset-2`}>Go Back.
          </button>
        </div>
      )}
      <div className={`flex justify-center flex-col bp-620:w-[412px]`}>
        <div className={`flex w-full mb-3`}>
          <LabelAndInput
            onChangeState={{ valueEntered: enteredToken, setValueEntered: setEnteredToken }}
            labelStyle={`dark-blue`} name={`code`} placeholder={`6-digit code`}
            customClassNames={`w-full`} label={`Enter Verification Code`}
            inputType={`number`} required />
        </div>
        <Paragraph customClasses={`mb-11`} text={(
          <>
            We&#39;ve sent a verification code to <HighlightText style={`black`} text={userEmail} />. Please enter it
            first to change
            your password.
          </>
        )} />

        <Button onClick={handleConfirmToken} disabled={loading} customClasses={`disabled:animate-pulse`} type={`button`}
                btnVariant={`dark-blue`} mode={`lg`}
                label={`Verify`} />
      </div>
    </>
  );
}
