'use client';

import { ForgotPasswordStatesType } from '@/components/Auth/ForgotPassword/ForgotPassword';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import Button from '@/components/UI/Button/Button';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { emailSchema } from '@/utils/schemas/emailSchema';
import { useGenerateChangePasswordToken } from '@/hooks/mutations/useGenerateChangePasswordToken';
import BackdropMUI from '@/components/UI/Backdrop/BackdropMUI';

type VerificationEmailFormType = {
  handleBadgeClick: (step: keyof ForgotPasswordStatesType) => void;
  enteredEmail: { value: string; setValue: Dispatch<SetStateAction<string>> };
  // children: ReactNode;
}

export default function VerificationEmailForm({ handleBadgeClick, enteredEmail }: VerificationEmailFormType) {
  const { value, setValue } = enteredEmail;
  const [errorMessage, setErrorMessage] = useState(``);
  const [backdropVisibility, setBackdropVisibility] = useState(false);
  const { generateChangePasswordToken } = useGenerateChangePasswordToken();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries()) as { email: string };

    const validate = emailSchema.safeParse({ email: results?.email });

    if (!validate.success) {
      const { message } = validate.error.errors[0];
      setErrorMessage(() => message);
      return;
    }
    setBackdropVisibility(() => true);
    setErrorMessage(() => ``);

    const response = await generateChangePasswordToken({ email: results?.email });

    if (response?.data?.message) {
      setBackdropVisibility(() => false);
      setErrorMessage(response.data.message);
      return;
    }
    setValue(() => results.email);
    setBackdropVisibility(() => false);
    // @ts-ignore
    handleBadgeClick(() => `stepTwo`);
  }

  return (
    <>
      <BackdropMUI state={{ open: backdropVisibility, setOpen: setBackdropVisibility }}
                   alertMessage={`Please wait til the operation is complete.. You can close the backdrop if needed.`} />
      <div className={`flex flex-col`}>
        {errorMessage && (
          <div className={`mt-7 mb-6`}>
            <ErrorMessage errorMessage={errorMessage} />
          </div>
        )}
        <form onSubmit={handleSubmit} className={`flex justify-center flex-col bp-620:w-[412px]`}>
          <div className={`flex w-full mb-11`}>
            <LabelAndInput labelStyle={`dark-blue`} name={`email`} placeholder={`Enter your email`}
                           customClassNames={`w-full`} label={`Email`}
                           inputType={`email`} required />
          </div>

          <div className={`flex`}>
            <Button btnVariant={`dark-blue`} mode={`lg`} type={`submit`} label={`Send Verification Code`}
              // @ts-ignore
              //       onClick={() => handleBadgeClick(`stepTwo`)}
            />
          </div>
        </form>
      </div>
    </>
  );
}
