// 'use client';

import React, { ComponentPropsWithoutRef } from 'react';

type ButtonType = ComponentPropsWithoutRef<'button'> & {
  label: string;
  mode?: 'lg' | 'md';
  // children: ReactNode;
};

export default function Button({ label, mode = 'lg', ...props }: ButtonType) {
  return (
    <>
      {mode === 'lg' && (
        <button {...props} className={`font-bold bg-red-500 rounded-full flex 
               w-fit h-19 text-white 
              px-12 py-6 bp-620:text-xl
              transition-all duration-200 hover:bg-red-700 active:bg-red-400
              text-sm`}> {label} </button>
      )}

      {mode === 'md' && (
        <button  {...props} className={`font-bold bg-red-500 rounded-full flex 
               w-fit h-[62px] text-white 
              px-12 py-6 text-lg items-center
              transition-all duration-200 hover:bg-red-700 active:bg-red-400`}> {label} </button>
      )}
    </>
  );
}