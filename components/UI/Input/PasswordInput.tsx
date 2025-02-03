'use client';

import { Tooltip } from '@mui/material';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import EyeIcon from '@/components/UI/Icon/EyeIcon';
import React, { useState } from 'react';
import PasswordIcon from '@/components/UI/Icon/PasswordIcon';

type PasswordInputType = {
  inputName: string;
  label: string;
  placeholder: string;
  icon?: `eye` | `password` | undefined;
  required?: boolean;
  customInputClassNames?: string;
  labelSize?: string;
  disabled?: boolean;
  showStar?: boolean;
  valueEnteredState?: {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
  }
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
                  labelSize,
                  valueEnteredState,
                  disabled
                }: PasswordInputType) {


  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  return (
    <>
      <div className={`relative`}>
        <LabelAndInput
          disabled={disabled}
          onChangeState={valueEnteredState ? {
            valueEntered: valueEnteredState.value,
            setValueEntered: valueEnteredState.setValue
          } : undefined}
          showStar={showStar} labelSize={labelSize}
          labelStyle={`dark-blue`} name={inputName}
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
