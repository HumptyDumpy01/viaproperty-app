// 'use client';

import { ComponentPropsWithoutRef } from 'react';

type ButtonStatesType = {
  active: boolean;
  label: string;
  // children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

export default function ButtonActive({ active, label, ...props }: ButtonStatesType) {
  const activeStyles = `font-bold text-green-600 px-4 py-2 rounded-full
                  border border-green-600`;
  const disabledStyles = `font-medium text-zinc-400 px-4 py-2 rounded-full
                  border border-zinc-300`;
  return (
    <>
      <button {...props} type={`button`}
              className={active ? activeStyles : disabledStyles}>{label}
      </button>
    </>
  );
}
