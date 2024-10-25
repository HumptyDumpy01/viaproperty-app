// 'use client';

import React, { ComponentPropsWithoutRef } from 'react';

type ButtonType = ComponentPropsWithoutRef<'button'> & {
  label: string;
  mode?: 'lg' | 'md' | 'sm';
  btnVariant?: `red` | `white`
  // children: ReactNode;
};

export default function Button({ label, mode = 'lg', btnVariant = `red`, ...props }: ButtonType) {
  return (
    <>
      {(mode === 'lg' && btnVariant === `red`) && (
        <button {...props} className={`font-bold bg-red-500 rounded-full flex 
               w-fit h-19 text-white 
              px-12 py-6 bp-620:text-xl
              transition-all duration-200 hover:bg-red-700 active:bg-red-400
              text-sm`}> {label} </button>
      )}

      {(mode === 'md' && btnVariant === `red`) && (
        <button  {...props} className={`font-bold bg-red-500 rounded-full flex 
               w-fit h-[62px] text-white 
              px-12 py-6 text-lg items-center
              transition-all duration-200 hover:bg-red-700 active:bg-red-400`}> {label} </button>
      )}

      {(mode === 'md' && btnVariant === `white`) && (
        <button  {...props} className={`font-bold bg-white text-red-500 rounded-full flex 
               w-fit h-[62px] border-2 border-red-500
              px-12 py-6 text-lg items-center
              transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-transparent active:bg-zinc-700`}> {label} </button>
      )}

      {(mode === 'sm' && btnVariant === `white`) && (
        <button  {...props} className={`font-medium bg-white text-red-500 rounded-full flex 
               w-fit h-[38px] border-2 border-red-500
              px-3 py-3 text-sm items-center
              transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-transparent active:bg-zinc-700`}> {label} </button>
      )}

    </>
  );
}