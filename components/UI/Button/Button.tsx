// 'use client';

type ButtonType = {
  label: string;
  type?: `lg` | `md`;
  // children: ReactNode;
}

import React from 'react';

export default function Button({ label, type = `lg` }: ButtonType) {
  return (
    <>
      {type === `lg` && (
        <button className={`font-bold bg-red-500 rounded-full flex 
               w-fit h-19 text-white 
              px-12 py-6 text-xl
              transition-all duration-200 hover:bg-red-700 active:bg-red-400`}> {label} </button>
      )}

      {type === `md` && (
        <button className={`font-bold bg-red-500 rounded-full flex 
               w-fit h-[62px] text-white 
              px-12 py-6 text-lg items-center
              transition-all duration-200 hover:bg-red-700 active:bg-red-400`}> {label} </button>
      )}
    </>
  );
}
