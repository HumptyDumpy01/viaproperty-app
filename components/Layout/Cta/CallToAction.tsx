// 'use client';

type CallToActionType = {
  span: string;
  message: string;
  buttonLabel: string;
  // children: ReactNode;
}

import React from 'react';

export default function CallToAction({ span, buttonLabel, message }: CallToActionType) {
  return (
    <>
      <div className={`border border-red-500 h-auto rounded-2xl flex items-center justify-center flex-col
                pb-4 mt-6`}>
                  <span className={`uppercase text-white text-xl font-bold
                  text-center inline-block mt-5 mb-1.5`}>{span}</span>
        <p className={`text-white text-[12px] text-center mb-5`}>{message}</p>
        <button
          className={`h-11 bg-linear-main-red rounded-full px-7 font-semibold text-white`}>{buttonLabel}</button>
      </div>
    </>
  );
}
