// 'use client';

import { ForgotPasswordStatesType } from '@/components/Auth/ForgotPassword/ForgotPassword';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import Button from '@/components/UI/Button/Button';
import PasswordInput from '@/components/UI/Input/PasswordInput';
import { useState } from 'react';
import { confirmPasswordSchema } from '@/utils/schemas/auth/confirmPasswordSchema';
import { useUpdateUserPassword } from '@/hooks/mutations/useUpdateUserPassword';
import BackdropMUI from '@/components/UI/Backdrop/BackdropMUI';

type EnterNewPasswordType = {
  handleBadgeClick: (step: keyof ForgotPasswordStatesType) => void;
  enteredToken: string;
  userEmail: string;
  // children: ReactNode;
}

export default function EnterNewPasswordForm({ handleBadgeClick, enteredToken, userEmail }: EnterNewPasswordType) {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(``);

  const [passwordEntered, setPasswordEntered] = useState(``);
  const [confirmPasswordEntered, setConfirmPasswordEntered] = useState(``);
  const { changeUserPassword, loading } = useUpdateUserPassword();

  async function handleSubmitNewForm() {
    setErrorMessage(() => ``);
    if (passwordEntered?.trim() === `` || confirmPasswordEntered?.trim() === ``) {
      return;
    }
    const validate = confirmPasswordSchema.safeParse({
      password: passwordEntered,
      confirmPassword: confirmPasswordEntered
    });

    if (!validate.success) {
      setErrorMessage(() => validate.error.errors[0].message);
      return;
    }
    setBackdropOpen(() => true);

    const response = await changeUserPassword({
      password: passwordEntered,
      confirmPassword: confirmPasswordEntered,
      userEmail: userEmail,
      token: enteredToken
    });

    if (response?.data.message) {
      setErrorMessage(() => response?.data.message);
      setBackdropOpen(() => false);
      return;
    }
    handleBadgeClick(`done`);
    setBackdropOpen(() => false);
  }

  return (
    <>
      <BackdropMUI state={{ open: backdropOpen, setOpen: setBackdropOpen }}
                   alertMessage={`Please wait until we submit your password changes.`} />
      {errorMessage && (
        <div className={`mt-7 mb-6`}>
          <ErrorMessage errorMessage={errorMessage} />
        </div>
      )}
      <div className={`flex justify-center flex-col bp-620:w-[412px]`}>

        <div className={`flex flex-col gap-4 mb-12`}>

          <PasswordInput
            customInputClassNames={`disabled:animate-pulse`}
            disabled={loading}
            valueEnteredState={{ value: passwordEntered, setValue: setPasswordEntered }}
            required
            icon={`eye`} label={`Password`}
            inputName={`password`}
            placeholder={`Your New password`} />

          <PasswordInput
            customInputClassNames={`disabled:animate-pulse`}
            disabled={loading}
            valueEnteredState={{ value: confirmPasswordEntered, setValue: setConfirmPasswordEntered }}
            required icon={`password`}
            label={`Confirm Password`}
            inputName={`confirmPassword`}
            placeholder={`Confirm new password`} />

        </div>
        <Button customClasses={`disabled:animate-pulse`} disabled={loading} btnVariant={`dark-blue`} mode={`lg`}
                type={`button`} label={`Save`}
                onClick={handleSubmitNewForm} />
      </div>
    </>
  );
}
