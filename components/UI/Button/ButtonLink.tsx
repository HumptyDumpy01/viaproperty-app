// 'use client';

type ButtonLinkType = {
  href: string;
  buttonLabel: string;
  animationPulse?: boolean;
  // children: ReactNode;
}

import Link from 'next/link';
import React from 'react';

export default function ButtonLink({ href, buttonLabel, animationPulse = false }: ButtonLinkType) {
  return (
    <>
      <Link className={`text-2xl bg-clip-text text-transparent bg-linear-main-red mb-6
                font-semibold border-b-4 border-b-red-500 pb-2
                transition-all duration-200 hover:font-bold w-fit ${animationPulse ? `hover:animate-pulse` : ``}`}
            href={href}>{buttonLabel}</Link>
    </>
  );
}
