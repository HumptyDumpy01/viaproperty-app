// 'use client';

type BulkyLinkType = {
  linkStyle: `red` | `emptyBlack`;
  href: string;
  label: string;
  orSeparator?: boolean;
  // children: ReactNode;
}

import Link from 'next/link';

export default function BulkyLink({ linkStyle, href, label, orSeparator }: BulkyLinkType) {
  const redStyles = `font-bold bg-red-500 rounded-full flex 
               w-fit h-19 text-white 
              px-12 py-6 bp-620:text-xl
              transition-all duration-200 hover:bg-red-700 active:bg-red-400
              text-sm`;
  const emptyBlackStyles = `font-bold bg-white rounded-full flex 
               w-fit h-19 text-zinc-900 border border-zinc-900 
              px-12 py-6 bp-620:text-xl
              transition-all duration-200 hover:bg-zinc-900 hover:text-white active:bg-zinc-400
              text-sm`;
  return (
    <>
      <Link className={linkStyle === `red` ? redStyles : emptyBlackStyles} href={href}>{label}</Link>
      {orSeparator && <span className={`text-zinc-900 font-semibold mx-2 uppercase`}>or</span>}
    </>
  );
}
