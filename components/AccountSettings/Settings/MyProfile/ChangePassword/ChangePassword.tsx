'use client';

type ChangePasswordType = {
  userEmail: string;
  // children: ReactNode;
}

import { ReactNode, useState } from 'react';
import ChangePasswordZeroStage
  from '@/components/AccountSettings/Settings/MyProfile/ChangePassword/ChangePasswordZeroStage';
import EnterVerificationCodeForm from '@/components/Auth/ForgotPassword/EnterVerificationCodeForm';
import EnterNewPasswordForm from '@/components/Auth/ForgotPassword/EnterNewPasswordForm';

export type ChangePasswordStagesType = 0 | 1 | 2 | 3;

export default function ChangePassword({ userEmail }: ChangePasswordType) {

  const [changePasswordStages, setChangePasswordStages] = useState<ChangePasswordStagesType>(0);
  const [enteredToken, setEnteredToken] = useState<string>(``);

  let content: ReactNode;

  switch (changePasswordStages) {
    case 0:
      content = (
        <>
          <ChangePasswordZeroStage userEmail={userEmail} setChangePasswordStages={setChangePasswordStages} />
        </>
      );
      break;

    case 1:
      content = (
        <>
          <EnterVerificationCodeForm enteredTokenState={{ enteredToken, setEnteredToken }}
                                     handleGoBackFunc={() => setChangePasswordStages(() => 0)} userEmail={userEmail}
                                     handleBadgeClick={() => setChangePasswordStages(2)} />
        </>
      );
      break;
    case 2:
      content = (
        <>
          <EnterNewPasswordForm userEmail={userEmail} enteredToken={enteredToken}
                                handleBadgeClick={() => setChangePasswordStages(3)} />
        </>
      );
      break;
    case 3:
      content = (
        <>
          <h2 className={`text-blue-950 text-2xl font-semibold`}>The new password was successfully set!</h2>
        </>
      );
      break;

  }

  return (
    <>
      <div className={`flex flex-col justify-center gap-3 mb-9`}>
                  <span
                    className={`w-fit bg-clip-text text-transparent 
                    bg-linear-main-dark-blue font-bold inline-block text-xl`}>Change Password</span>

        {content}
      </div>
    </>
  );
}
