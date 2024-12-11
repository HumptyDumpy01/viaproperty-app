'use client';

import { Tooltip } from '@mui/material';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import EyeIcon from '@/components/UI/Icon/EyeIcon';
import { useState } from 'react';
import PasswordIcon from '@/components/UI/Icon/PasswordIcon';

type PasswordInputType = {
  inputName: string;
  label: string;
  placeholder: string;
  icon?: `eye` | `password` | undefined;
  required?: boolean;
  customInputClassNames?: string;
  labelSize?: string;
  showStar?: boolean;
  // children: ReactNode;
}

export default function
  PasswordInput({
                  inputName,
                  label,
                  placeholder,
                  icon = undefined,
                  required = false,
                  showStar = true,
                  customInputClassNames = `w-full`,
                  labelSize
                }: PasswordInputType) {

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  return (
    <>
      <div className={`relative`}>
        <LabelAndInput showStar={showStar} labelSize={labelSize} labelStyle={`dark-blue`} name={inputName}
                       placeholder={placeholder}
                       customClassNames={customInputClassNames} label={label} required={required}
                       inputType={passwordVisible ? `text` : `password`} />
        {icon === `eye` && (
          <Tooltip title={!passwordVisible ? `Click to see the password` : `Hide password`}>
            <div className={`absolute top-[58px] right-4`} onClick={() => setPasswordVisible(prevState => !prevState)}>
              <EyeIcon open={passwordVisible} />
            </div>
          </Tooltip>
        )}
        {icon === `password` && (
          <Tooltip title={`Enter your password once more`}>
            <div className={`absolute top-[58px] right-4`}>
              <PasswordIcon />
            </div>
          </Tooltip>
        )}
      </div>
    </>
  );
}
