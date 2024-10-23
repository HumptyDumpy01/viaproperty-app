// 'use client';

type ButtonType = {
  label: string;
  // children: ReactNode;
}

import React from 'react';

export default function Button({ label }: ButtonType) {
  return (
    <>
      <button className={`font-bold bg-red-500 rounded-full flex 
               w-fit h-19 text-white 
              px-12 py-6 text-xl
              transition-all duration-200 hover:bg-red-700 active:bg-red-400`}> {label} </button>
    </>
  );
}
