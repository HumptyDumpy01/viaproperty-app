'use client';

import React, { ReactNode } from 'react';

type LabelAndTextType = {
  name: string;
  type?: `input` | `textarea`;
  placeholder: string;
  customClassNames: string;
  label: string;
  showDisabledLabel?: boolean;
  required?: boolean;
  showStar?: boolean;
  inputType: `text` | `email` | `password` | `number` | `tel`
  labelStyle?: `red-and-huge` | `grey-and-small` | `dark-blue`;
  labelSize?: string;
  defaultValue?: string;
  value?: any;
  disabled?: boolean;
  onChangeState?: {
    valueEntered: string;
    setValueEntered: React.Dispatch<React.SetStateAction<string>>;
  }
  // children: ReactNode;
}

export default function
  LabelAndInput({
                  name,
                  placeholder,
                  customClassNames,
                  inputType,
                  label,
                  required = false,
                  type = `input`,
                  showStar = true,
                  labelStyle = `red-and-huge`,
                  labelSize = `text-2xl`,
                  defaultValue = ``,
                  disabled = false,
                  onChangeState,
                  showDisabledLabel = false
                }: LabelAndTextType) {

  let content: ReactNode = null;

  const labelStyles = labelStyle === `red-and-huge` ? `w-fit text-red-500 font-bold ${labelSize}` : labelStyle === `grey-and-small` ? `w-fit 
  text-zinc-700 font-semibold text-sm` : `w-fit bg-clip-text text-transparent bg-linear-main-dark-blue ${labelSize} font-bold`;
  const disabledStyles = disabled ? `cursor-not-allowed bg-zinc-300 text-zinc-300` : ``;
  const disabledLabelStyles = disabled ? `text-zinc-400 font-semibold text-xl` : ``;

  const inputNode: ReactNode = (
    <>
      <input
        value={onChangeState?.valueEntered}
        onChange={onChangeState?.setValueEntered ? (e) => onChangeState!.setValueEntered(e.currentTarget.value)
          : undefined}
        disabled={disabled} defaultValue={defaultValue}
        type={inputType} id={name}
        name={name}
        className={`bg-zinc-50 p-4 rounded-xl ${customClassNames} text-zinc-900
          focus:outline-none border-2 border-transparent transition-all 
          duration-300 ${disabledStyles} ${labelStyle !== `dark-blue` ? `focus:border-red-500` : `focus:border-blue-900`} focus:bg-white`}
        placeholder={placeholder} required={required} />
    </>
  );

  const textareaNode: ReactNode = (
    <>
      <textarea defaultValue={defaultValue} disabled={disabled} id={`${name}`} name={`${name}`}
                className={`bg-zinc-50 p-4 rounded-xl ${customClassNames} text-zinc-900
          focus:outline-none border-2 border-transparent transition-all duration-300 focus:border-red-500 focus:bg-white`}
                placeholder={placeholder} required={required} />
    </>
  );

  switch (type) {
    case `input`:
      content = inputNode;
      break;
    case `textarea`:
      content = textareaNode;
      break;
  }

  return (
    <>
      <div className={`flex flex-col gap-2.5 w-full`}>
        <div className={`flex gap-2 items-center`}>
          <label htmlFor={name}
                 className={disabled ? disabledLabelStyles : labelStyles}>{label} {required && showStar ? `*` : ``}</label>
          {showDisabledLabel &&
            <span className={`text-red-500 font-semibold text-[13px] uppercase`}>Cannot be changed</span>}
        </div>
        {content}
      </div>
    </>
  );
}
