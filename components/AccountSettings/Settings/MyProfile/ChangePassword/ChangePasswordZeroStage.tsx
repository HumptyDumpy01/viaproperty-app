// 'use client';

import {
  ChangePasswordStagesType
} from '@/components/AccountSettings/Settings/MyProfile/ChangePassword/ChangePassword';
import Button from '@/components/UI/Button/Button';
import { Tooltip } from '@mui/material';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import CloseIcon from '@/components/UI/Icon/CloseIcon';
import { useState } from 'react';
import { useGenerateChangePasswordToken } from '@/hooks/mutations/useGenerateChangePasswordToken';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import BackdropMUI from '@/components/UI/Backdrop/BackdropMUI';

type ChangePasswordFirstFormType = {
  setChangePasswordStages: (stage: ChangePasswordStagesType) => void;
  userEmail: string;
  // children: ReactNode;
}

export default function ChangePasswordZeroStage({ setChangePasswordStages, userEmail }: ChangePasswordFirstFormType) {
  const [backdropState, setBackdropState] = useState(false);
  const [changePasswordEnabled, setChangePasswordEnabled] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState(``);
  const { generateChangePasswordToken, loading } = useGenerateChangePasswordToken();

  async function handleSendVerificationCode() {
    setBackdropState(() => true);
    const response = await generateChangePasswordToken({ email: userEmail });
    if (response && response.data?.createChangePasswordToken?.createdAt) {
      setChangePasswordStages(1);
      setBackdropState(() => false);
    } else {
      setErrorMessage(response.data.message);
      setChangePasswordEnabled(() => false);
      setBackdropState(() => false);
    }
  }

  return (
    <>
      <BackdropMUI circularColor={`error`} state={{ open: backdropState, setOpen: setBackdropState }}
                   alertMessage={`Please wait util we send you the verification code`} />
      {errorMessage && (
        <div className={`mb-4`}>
          <ErrorMessage errorMessage={errorMessage} />
        </div>
      )}
      <div className={`relative w-fit`}>
        <Button customClasses={`disabled:animate-pulse`} disabled={!changePasswordEnabled || loading}
                onClick={handleSendVerificationCode}
                btnVariant={`dark-blue`}
                mode={`md`} type={`button`}
                label={`Send Verification Code`} />
        <Tooltip
          title={!changePasswordEnabled ? `Enable the change password button` : `Disable the change password button`}>
          <div className={`absolute -top-4 -right-2 h-12 w-12 bg-white rounded-full flex items-center justify-center
            border border-red-500 cursor-pointer`}>
            <div onClick={() => setChangePasswordEnabled(true)}>
              {!changePasswordEnabled && (
                <ViapropertyIcon icon={`edit`} />
              )}
            </div>
            <div onClick={() => setChangePasswordEnabled(false)} className={` cursor-pointer`}>
              {changePasswordEnabled && (
                <CloseIcon strokeColor={`red`} />
              )}
            </div>
          </div>
        </Tooltip>
      </div>
    </>
  );
}
