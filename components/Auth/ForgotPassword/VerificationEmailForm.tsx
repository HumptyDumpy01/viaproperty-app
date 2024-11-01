// 'use client';

import { ForgotPasswordStatesType } from '@/components/Auth/ForgotPassword/ForgotPassword';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import Button from '@/components/UI/Button/Button';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';

type VerificationEmailFormType = {
  handleBadgeClick: (step: keyof ForgotPasswordStatesType) => void;
  // children: ReactNode;
}

export default function VerificationEmailForm({ handleBadgeClick }: VerificationEmailFormType) {
  return (
    <div className={`flex flex-col`}>
      <div className={`mt-7 mb-6`}>
        <ErrorMessage errorMessage={`Incorrect email!`} />
      </div>
      <form className={`flex justify-center flex-col bp-620:w-[412px]`}>


        <div className={`flex w-full mb-11`}>
          <LabelAndInput labelStyle={`dark-blue`} name={`email`} placeholder={`Enter your email`}
                         customClassNames={`w-full`} label={`Email`}
                         inputType={`email`} required />
        </div>

        <div className={`flex`}>
          <Button btnVariant={`dark-blue`} mode={`lg`} type={`button`} label={`Send Verification Code`}
            // @ts-ignore
                  onClick={() => handleBadgeClick(`stepTwo`)} />
        </div>
      </form>
    </div>
  );
}
