// 'use client';

import { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

type LinkSmallType = {
  label: string;
  mode?: `link` | `button`;
  // children: ReactNode;
} & ComponentPropsWithoutRef<'button'> & ComponentPropsWithoutRef<'a'>;

export default function ButtonSmall({ label, mode = `button`, ...props }: LinkSmallType) {
  return (
    <>
      <div>
        {mode === `button` && (
          <button
            {...props}
            type={`button`}
            className={`text-sm text-zinc-600
              transition-all duration-200 border-b border-transparent hover:border-blue-900
              hover:text-blue-950`}>{label}</button>

        )}
        {mode === `link` && (
          <Link
            href={props.href!}
            {...props}
            className={`text-sm text-zinc-600
              transition-all duration-200 border-b border-transparent hover:border-blue-900
              hover:text-blue-950`}>{label}</Link>
        )}
      </div>
    </>
  );
}
