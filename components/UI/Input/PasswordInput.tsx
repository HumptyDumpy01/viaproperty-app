'use client';

import { Tooltip } from '@mui/material';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import EyeIcon from '@/components/UI/Icon/EyeIcon';
import { useState } from 'react';

type PasswordInputType = {
  inputName: string;
  label: string;
  placeholder: string;
  eyeIcon?: boolean;
  // children: ReactNode;
}

export default function PasswordInput({ inputName, label, placeholder, eyeIcon = false }: PasswordInputType) {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  return (
    <>
      <div className={`relative`}>
        <LabelAndInput labelStyle={`dark-blue`} name={inputName} placeholder={placeholder}
                       customClassNames={`w-full`} label={label}
                       inputType={passwordVisible ? `text` : `password`} />
        {eyeIcon && (
          <Tooltip title={!passwordVisible ? `Click to see the password` : `Hide password`}>
            <div className={`absolute top-[58px] right-4`} onClick={() => setPasswordVisible(prevState => !prevState)}>
              <EyeIcon open={passwordVisible} />
            </div>
          </Tooltip>
        )}
      </div>
    </>
  );
}
