// 'use client';

import { ReactNode } from 'react';

type LabelAndTextType = {
  name: string;
  type?: `input` | `textarea`;
  placeholder: string;
  customClassNames: string;
  label: string;
  required?: boolean;
  inputType: `text` | `email` | `password` | `number` | `tel`
  labelStyle?: `red-and-huge` | `grey-and-small` | `dark-blue`;
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
                  labelStyle = `red-and-huge`
                }: LabelAndTextType) {
  let content: ReactNode = null;

  const labelStyles = labelStyle === `red-and-huge` ? `w-fit text-red-500 font-bold text-2xl` : labelStyle === `grey-and-small` ? `w-fit 
  text-zinc-400 text-sm` : `w-fit bg-clip-text text-transparent bg-linear-main-dark-blue text-2xl font-bold`;

  const inputNode: ReactNode = (
    <>
      <input type={`${inputType}`} id={`${name}`} name={`${name}`}
             className={`bg-zinc-50 p-4 rounded-xl ${customClassNames} text-zinc-900
          focus:outline-none border-2 border-transparent transition-all 
          duration-300 ${labelStyle !== `dark-blue` ? `focus:border-red-500` : `focus:border-blue-900`} focus:bg-white`}
             placeholder={placeholder} required={required} />
    </>
  );

  const textareaNode: ReactNode = (
    <>
      <textarea id={`${name}`} name={`${name}`}
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
      <div className={`flex flex-col gap-2.5`}>
        <label htmlFor={`${name}`} className={labelStyles}>{label} {required ? `*` : ``}</label>
        {content}
      </div>
    </>
  );
}
