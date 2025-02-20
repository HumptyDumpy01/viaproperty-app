// 'use client';

import * as React from 'react';
import { ComponentPropsWithoutRef } from 'react';

type AIBadgeToneType = {
  active: boolean;
  label: string;
  // children: ReactNode;
} & ComponentPropsWithoutRef<'span'>;

export default function AIBadgeTone({ active, label, ...props }: AIBadgeToneType) {
  let styles: string;

  switch (active) {
    case  true:
      styles = `border-red-500 text-red-500 font-semibold`;
      break;
    case false:
      styles = `border-gray-400 text-gray-400`;
      break;
  }

  return (
    <>
      <button {...props} type={`button`}
              className={`rounded-full py-2 px-6 border text-[15px] ${styles}`}>{label}</button>
    </>
  );
}
