// 'use client';

type ButtonLinkType = {
  href: string;
  buttonLabel: string;
  animationPulse?: boolean;
  type?: `link` | `button`
  size?: `medium` | `large`;
  target?: `_blank` | `_self` | `_parent` | `_top`;
  // children: ReactNode;
}

import Link from 'next/link';
import React from 'react';

export default function
  ButtonLink({
               href,
               buttonLabel,
               animationPulse = false,
               type = `link`,
               size = `large`,
               target = `_self`
             }: ButtonLinkType) {
  return (
    <>
      {type === `link` && (
        <>
          <Link target={target} className={`${size === `large` ? `text-2xl` : `text-xl`} bg-clip-text text-transparent bg-linear-main-red mb-6
                font-semibold border-b-4 border-b-red-500 pb-2
                transition-all duration-200 hover:font-bold w-fit ${animationPulse ? `hover:animate-pulse` : ``}`}
                href={href}>{buttonLabel}</Link>
        </>
      )}
      {type === `button` && (
        <>
          <button className={`${size === `large` ? `text-2xl` : `text-xl`} bg-clip-text text-transparent bg-linear-main-red mb-6
                font-semibold border-b-4 border-b-red-500 pb-2
                transition-all duration-200 hover:font-bold w-fit ${animationPulse ? `hover:animate-pulse` : ``}`}>{buttonLabel}</button>
        </>
      )}
    </>
  );
}
