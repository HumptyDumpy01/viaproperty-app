// 'use client';

import React, { ComponentPropsWithoutRef } from 'react';

type ButtonType = ComponentPropsWithoutRef<'button'> & {
  label: string;
  mode?: 'lg' | 'md' | 'sm';
  btnVariant?: `red` | `white` | `black`;
  linearGradient?: boolean;
  scale?: boolean;
  // children: ReactNode;
};

export default function
  Button({ label, mode = 'lg', btnVariant = `red`, linearGradient, ...props }: ButtonType) {

  return (
    <>
      {(mode === 'lg' && btnVariant === `red`) && (
        <button {...props} className={`font-bold ${linearGradient ? `bg-linear-main-red` : `bg-red-500`} rounded-full flex 
               w-fit h-19 text-white 
              px-12 py-6 bp-620:text-xl
              transition-all duration-200 hover:bg-red-700 active:bg-red-400
              text-sm`}> {label} </button>
      )}

      {(mode === 'md' && btnVariant === `red`) && (
        <button  {...props} className={`font-bold ${linearGradient ? `bg-linear-main-red` : `bg-red-500`} rounded-full flex 
               w-fit h-[62px] text-white 
              px-12 py-6 text-lg items-center
              transition-all duration-200 hover:bg-red-700 active:bg-red-400`}> {label} </button>
      )}

      {(mode === 'md' && btnVariant === `white`) && (
        <button  {...props} className={`font-bold bg-white text-red-500 rounded-full flex 
               w-fit h-[62px] border border-red-500
              px-12 py-6 text-lg items-center
              transition-all duration-200 hover:bg-linear-main-red hover:text-white hover:border-transparent active:bg-zinc-700`}> {label} </button>
      )}

      {(mode === 'sm' && btnVariant === `white`) && (
        <button  {...props} className={`font-medium bg-white text-red-500 rounded-full flex 
               w-fit h-[38px] border border-red-500
              px-3 py-3 text-sm items-center
              transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-transparent active:bg-zinc-700`}> {label} </button>
      )}

      {(mode === 'sm' && btnVariant === `black`) && (
        <button  {...props} className={`font-medium bg-white text-zinc-800 rounded-full flex 
               w-fit h-[38px] border border-black
              px-3 py-3 text-sm items-center
              transition-all duration-200 hover:bg-zinc-900 hover:animate-pulse hover:text-white hover:border-zinc-800 active:bg-zinc-700`}> {label} </button>
      )}
    </>
  );
}