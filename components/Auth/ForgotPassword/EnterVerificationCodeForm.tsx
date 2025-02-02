// 'use client';

import { ForgotPasswordStatesType } from '@/components/Auth/ForgotPassword/ForgotPassword';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import Button from '@/components/UI/Button/Button';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';

type EnterVerificationCodeFormType = {
  handleBadgeClick: (step: keyof ForgotPasswordStatesType) => void;
  userEmail: string;
  // children: ReactNode;
}
export default function EnterVerificationCodeForm({ handleBadgeClick, userEmail }: EnterVerificationCodeFormType) {
  return (
    <>
      <div className={`mt-7 mb-6`}>
        <ErrorMessage errorMessage={`Invalid Token Provided!`} />
      </div>
      <form className={`flex justify-center flex-col bp-620:w-[412px]`}>
        <div className={`flex w-full mb-3`}>
          <LabelAndInput labelStyle={`dark-blue`} name={`code`} placeholder={`6-digit code`}
                         customClassNames={`w-full`} label={`Enter Verification Code`}
                         inputType={`password`} required />
        </div>
        <Paragraph customClasses={`mb-11`} text={(
          <>
            We&#39;ve sent a verification code to <HighlightText style={`black`} text={userEmail} />. Please enter it
            first to change
            your password.
          </>
        )} />

        <Button btnVariant={`dark-blue`} mode={`lg`} type={`button`} label={`Verify`}
          // @ts-ignore
                onClick={() => handleBadgeClick(`stepTwo`)} />
      </form>
    </>
  );
}
