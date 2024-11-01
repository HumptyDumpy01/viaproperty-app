'use client';

/*type OverallType = {
  // children: ReactNode;
}*/
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import Button from '@/components/UI/Button/Button';
import HighlightText from '@/components/Typography/HighlightText';
import { useState } from 'react';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import CloseIcon from '@/components/UI/Icon/CloseIcon';
import { Tooltip } from '@mui/material';

export default function Overall(/*{  }: OverallType*/) {
  const [changePasswordEnabled, setChangePasswordEnabled] = useState<boolean>(false);

  return (
    <>
      <form className={`flex flex-col gap-4`}>
        <div className={`max-w-[422px] flex flex-col`}>
          <LabelAndInput defaultValue={`Nikolas Baker`} labelSize={`text-xl`} labelStyle={`dark-blue`}
                         name={`initials`}
                         placeholder={`e.g. John Doe`}
                         customClassNames={`text-sm`} label={`Initials`} required={true}
                         inputType={`text`} />
        </div>

        <div className={`max-w-[422px] flex flex-col`}>
          <LabelAndInput
            disabled={true} defaultValue={`tuznikolas@gmail.com`} labelSize={`text-xl`}
            labelStyle={`dark-blue`}
            name={`email`}
            placeholder={`Your email`}
            customClassNames={`text-sm`} label={`Email`}
            inputType={`text`} />
        </div>

        <div className={`flex flex-col justify-center gap-3 mb-9`}>
                  <span
                    className={`w-fit bg-clip-text text-transparent 
                    bg-linear-main-dark-blue font-bold inline-block text-xl`}>Change Password</span>
          <div className={`relative w-fit`}>
            <Button disabled={!changePasswordEnabled} btnVariant={`dark-blue`} mode={`md`} type={`button`}
                    label={`Send Verification Code`} />
            <div className={`absolute -top-4 -right-2 h-12 w-12 bg-white rounded-full flex items-center justify-center
            border border-red-500 cursor-pointer`}>
              <Tooltip
                title={!changePasswordEnabled ? `Enable the change password button` : `Disable the change password button`}>
                <>
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
                </>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className={`mb-10`}>
          <p className={`leading-relaxed text-sm text-zinc-900
                  `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <HighlightText text={`sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua`} />. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut
            aliquip ex ea commodo consequat. </p>
        </div>
        <div className={`flex justify-center flex-col gap-5`}>
          <Button btnVariant={`red`} mode={`lg`} label={`Save Changes`} />
          <Button type={`button`} btnVariant={`black`} mode={`lg`} label={`Cancel`} />
        </div>
      </form>
    </>
  );
}
