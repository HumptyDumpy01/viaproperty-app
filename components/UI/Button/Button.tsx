// 'use client';

import React, { ComponentPropsWithoutRef } from 'react';

type ButtonType = ComponentPropsWithoutRef<'button'> & {
  label: string;
  mode?: 'lg' | 'md' | 'sm';
  btnVariant?: `red` | `white` | `black` | `dark-blue` | `grey` | `green`;
  linearGradient?: boolean;
  scale?: boolean;
  disabled?: boolean;
  customClasses?: string;
  hover?: boolean;
  // children: ReactNode;
};

export default function
  Button({
           label,
           mode = 'lg',
           btnVariant = `red`,
           linearGradient,
           disabled = false,
           customClasses,
           hover = true,
           ...props
         }: ButtonType) {

  return (
    <>
      {(mode === 'lg' && btnVariant === `red`) && (
        <button disabled={disabled} {...props}
                className={`font-bold ${linearGradient ? `bg-linear-main-red` : `bg-red-500`} rounded-full flex 
               w-fit h-19 text-white 
              px-12 py-6 bp-620:text-xl
              transition-all duration-200 ${hover ? `hover:bg-red-700` : ``} active:bg-red-400
              text-sm ${customClasses}`}> {label} </button>
      )}

      {(mode === 'lg' && btnVariant === `black`) && (
        <button disabled={disabled} {...props}
                className={`font-bold ${linearGradient ? `bg-linear-main-red` : `bg-white`} rounded-full flex 
               w-fit h-19 text-zinc-900 border border-zinc-900 
              px-12 py-6 bp-620:text-xl
              transition-all duration-200 ${hover ? `hover:bg-zinc-900 ` : ``} hover:text-white active:bg-zinc-400
              text-sm ${customClasses}`}> {label} </button>
      )}

      {(mode === 'lg' && btnVariant === `grey`) && (
        <button disabled={disabled} {...props}
                className={`font-bold rounded-full flex 
               w-fit h-19 
              px-12 py-6 bp-620:text-xl
              transition-all duration-200 ${hover ? `hover:bg-zinc-900 ` : ``} hover:text-white active:bg-zinc-400
              text-sm text-white bg-zinc-400 ${customClasses}`}> {label} </button>
      )}

      {(mode === 'md' && btnVariant === `red`) && (
        <button disabled={disabled} {...props}
                className={`font-bold ${linearGradient ? `bg-linear-main-red` : `bg-red-500`} rounded-full flex 
               w-fit h-[62px] text-white 
              px-12 py-6 text-lg items-center
              transition-all duration-200 ${hover ? `hover:bg-red-700` : ``} active:bg-red-400 ${customClasses}`}> {label} </button>
      )}

      {(mode === 'md' && btnVariant === `green`) && (
        <button disabled={disabled} {...props}
                className={`font-bold bg-green-500 rounded-full flex 
               w-fit h-[62px] text-white 
              px-12 py-6 text-lg items-center
              transition-all duration-200 ${hover ? `hover:bg-red-700` : ``} active:bg-red-400 ${customClasses}`}> {label} </button>
      )}

      {(mode === 'md' && btnVariant === `white`) && (
        <button disabled={disabled} {...props} className={`font-bold bg-white text-red-500 rounded-full flex 
               w-fit h-[62px] border border-red-500
              px-12 py-6 text-lg items-center
              transition-all duration-200 ${hover ? `hover:bg-linear-main-red` : ``} 
              hover:text-white hover:border-transparent active:bg-zinc-700 ${customClasses}`}> {label} </button>
      )}

      {(mode === 'sm' && btnVariant === `white`) && (
        <button disabled={disabled} {...props} className={`font-medium bg-white text-red-500 rounded-full flex 
               w-fit h-[38px] border border-red-500
              px-3 py-3 text-sm items-center
              transition-all duration-200 ${hover ? `hover:bg-zinc-900` : ``} hover:text-white hover:border-transparent active:bg-zinc-700 ${customClasses}`}> {label} </button>
      )}

      {(mode === 'sm' && btnVariant === `black`) && (
        <button disabled={disabled} {...props} className={`font-medium bg-white text-zinc-800 rounded-full flex 
               w-fit h-[38px] border border-black
              px-3 py-3 text-sm items-center
              transition-all duration-200 ${hover ? `hover:bg-zinc-900` : ``} hover:animate-pulse hover:text-white hover:border-zinc-800 active:bg-zinc-700 ${customClasses}`}> {label} </button>
      )}

      {(mode === 'lg' && btnVariant === `dark-blue`) && (
        <button disabled={disabled} {...props} className={`font-bold bg-white text-white rounded-2xl flex 
               w-fit h-[38px] px-12 py-8 bp-620:text-2xl items-center
              transition-all duration-200 bg-linear-main-dark-blue
              ${hover ? `hover:bg-zinc-900` : ``} ${customClasses}`}> {label} </button>
      )}

      {(mode === 'md' && btnVariant === `dark-blue`) && (
        <button disabled={disabled} {...props} className={`font-bold bg-white text-white rounded-2xl flex 
               w-fit h-[38px] px-12 py-8 bp-620:text-xl items-center
              transition-all duration-200 ${customClasses}
               ${disabled ? `cursor-not-allowed bg-zinc-400` : `bg-linear-main-dark-blue ${hover ? `hover:bg-zinc-900` : ``}`}`}> {label} </button>
      )}
    </>
  );
}