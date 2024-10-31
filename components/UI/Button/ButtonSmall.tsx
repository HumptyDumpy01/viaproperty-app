// 'use client';

import { ComponentPropsWithoutRef } from 'react';

type LinkSmallType = {
  label: string;
  // children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

export default function ButtonSmall({ label, ...props }: LinkSmallType) {
  return (
    <>
      <div>
        <button
          {...props}
          type={`button`}
          className={`text-sm text-zinc-600
              transition-all duration-200 border-b border-transparent hover:border-blue-900
              hover:text-blue-950`}>{label}</button>
      </div>
    </>
  );
}
