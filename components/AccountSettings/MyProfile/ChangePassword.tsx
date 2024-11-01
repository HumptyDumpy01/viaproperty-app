// 'use client';

/*type ChangePasswordType = {
  // children: ReactNode;
}*/

import Button from '@/components/UI/Button/Button';
import { Tooltip } from '@mui/material';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import CloseIcon from '@/components/UI/Icon/CloseIcon';
import { useState } from 'react';

export default function ChangePassword(/*{  }: ChangePasswordType*/) {

  const [changePasswordEnabled, setChangePasswordEnabled] = useState<boolean>(false);

  return (
    <>
      <div className={`flex flex-col justify-center gap-3 mb-9`}>
                  <span
                    className={`w-fit bg-clip-text text-transparent 
                    bg-linear-main-dark-blue font-bold inline-block text-xl`}>Change Password</span>
        <div className={`relative w-fit`}>
          <Button disabled={!changePasswordEnabled} btnVariant={`dark-blue`} mode={`md`} type={`button`}
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
      </div>
    </>
  );
}
