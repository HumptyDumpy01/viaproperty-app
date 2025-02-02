'use client';

type ChangePasswordType = {
  userEmail: string;
  // children: ReactNode;
}

import { useState } from 'react';
import ChangePasswordZeroStage
  from '@/components/AccountSettings/Settings/MyProfile/ChangePassword/ChangePasswordZeroStage';
import EnterVerificationCodeForm from '@/components/Auth/ForgotPassword/EnterVerificationCodeForm';
import EnterNewPasswordForm from '@/components/Auth/ForgotPassword/EnterNewPasswordForm';

export type ChangePasswordStagesType = 0 | 1 | 2 | 3;

export default function ChangePassword({ userEmail }: ChangePasswordType) {

  const [changePasswordStages, setChangePasswordStages] = useState<ChangePasswordStagesType>(0);

  return (
    <>
      <div className={`flex flex-col justify-center gap-3 mb-9`}>
                  <span
                    className={`w-fit bg-clip-text text-transparent 
                    bg-linear-main-dark-blue font-bold inline-block text-xl`}>Change Password</span>

        {changePasswordStages === 0 && (
          <>
            <ChangePasswordZeroStage setChangePasswordStages={setChangePasswordStages} />
          </>
        )}
        {changePasswordStages === 1 && (
          <>
            <EnterVerificationCodeForm userEmail={userEmail} handleBadgeClick={() => setChangePasswordStages(2)} />
          </>
        )}
        {changePasswordStages === 2 && (
          <>
            <EnterNewPasswordForm handleBadgeClick={() => setChangePasswordStages(3)} />
          </>
        )}
        {changePasswordStages === 3 && (
          <>
            <h2 className={`text-blue-950 text-2xl font-semibold`}>The new password was successfully set!</h2>
          </>
        )}
      </div>
    </>
  );
}
