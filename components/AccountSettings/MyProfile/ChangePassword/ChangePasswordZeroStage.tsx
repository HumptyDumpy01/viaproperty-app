// 'use client';

import { ChangePasswordStagesType } from '@/components/AccountSettings/MyProfile/ChangePassword/ChangePassword';
import Button from '@/components/UI/Button/Button';
import { Tooltip } from '@mui/material';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import CloseIcon from '@/components/UI/Icon/CloseIcon';
import { useState } from 'react';

type ChangePasswordFirstFormType = {
  setChangePasswordStages: (stage: ChangePasswordStagesType) => void;
  // children: ReactNode;
}

export default function ChangePasswordZeroStage({ setChangePasswordStages }: ChangePasswordFirstFormType) {
  const [changePasswordEnabled, setChangePasswordEnabled] = useState<boolean>(false);
  return (
    <>
      <div className={`relative w-fit`}>
        <Button disabled={!changePasswordEnabled} onClick={() => setChangePasswordStages(1)} btnVariant={`dark-blue`}
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
