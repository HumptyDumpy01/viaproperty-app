// 'use client';

import { ForgotPasswordStatesType } from '@/components/Auth/ForgotPassword/ForgotPassword';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import Button from '@/components/UI/Button/Button';

type EnterVerificationCodeFormType = {
  handleBadgeClick: (step: keyof ForgotPasswordStatesType) => void;
  // children: ReactNode;
}
export default function EnterVerificationCodeForm({ handleBadgeClick }: EnterVerificationCodeFormType) {
  return (
    <>
      <div className={`mt-7 mb-6`}>
        <ErrorMessage errorMessage={`Invalid Token Provided!`} />
      </div>
      <form className={`flex justify-center flex-col bp-620:w-[412px]`}>
        <div className={`flex w-full mb-11`}>
          <LabelAndInput labelStyle={`dark-blue`} name={`code`} placeholder={`6-digit code`}
                         customClassNames={`w-full`} label={`Enter Verfification Code`}
                         inputType={`password`} required />
        </div>

        <Button btnVariant={`dark-blue`} mode={`lg`} type={`button`} label={`Verify`}
          // @ts-ignore
                onClick={() => handleBadgeClick(`stepTwo`)} />
      </form>
    </>
  );
}
