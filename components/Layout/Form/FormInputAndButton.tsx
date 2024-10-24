// 'use client';

type inputAndButtonType = {
  inputType: 'email' | 'text' | 'password' | 'number' | `search`;
  inputName: string;
  btnLabel: string;
  inputPlaceholder: string;
  // children: ReactNode;
}

import Button from '@/components/UI/Button/Button';
import React from 'react';

export default function FormInputAndButton({ inputType, btnLabel, inputName, inputPlaceholder }: inputAndButtonType) {
  return (
    <>
      <form className={`flex items-center justify-center gap-8 mb-8`}>
        <input type={inputType}
               name={inputName}
               className={`h-16 pl-7 rounded-full w-80
                     text-slate-900 transition-all duration-200 focus:outline-none border-2 border-transparent 
                     focus:border-red-600`} placeholder={inputPlaceholder} />
        <Button type={`button`} mode={`md`} label={btnLabel} />
      </form>
    </>
  );
}
