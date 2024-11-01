// 'use client';

import { ForgotPasswordStatesType } from '@/components/Auth/ForgotPassword/ForgotPassword';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import Button from '@/components/UI/Button/Button';
import PasswordInput from '@/components/UI/Input/PasswordInput';

type EnterNewPasswordType = {
  handleBadgeClick: (step: keyof ForgotPasswordStatesType) => void;
  // children: ReactNode;
}

export default function EnterNewPasswordForm({ handleBadgeClick }: EnterNewPasswordType) {
  return (
    <>
      <div className={`mt-7 mb-6`}>
        <ErrorMessage errorMessage={`Passwords do not match!`} />
      </div>
      <form className={`flex justify-center flex-col bp-620:w-[412px]`}>

        <div className={`flex flex-col gap-4 mb-12`}>

          <PasswordInput required icon={`eye`} label={`Password`} inputName={`password`}
                         placeholder={`Your New password`} />

          <PasswordInput required icon={`password`} label={`Confirm Password`} inputName={`confirmPassword`}
                         placeholder={`Confirm new password`} />

        </div>
        <Button btnVariant={`dark-blue`} mode={`lg`} type={`button`} label={`Save`}
                onClick={() => handleBadgeClick(`done`)} />
      </form>
    </>
  );
}
