// 'use client';

import Link from 'next/link';

type NavLinkType = {
  type: `default` | `active`;
  label: string;
  path: string;
  // children: ReactNode;
}

export default function NavLink({ type, label, path }: NavLinkType) {
  const defaultStyles = `text-[15px] font-semibold text-zinc-500`;
  const activeStyles = `text-[15px] font-bold bg-clip-text text-transparent bg-linear-main-red`;
  return (
    <>
      <div className={`flex gap-1 flex-col`}>
        <Link href={path}
              className={type === `default` ? defaultStyles : activeStyles}>{label}</Link>
        <div className={`${type === `active` ? `` : `hidden`} bg-red-500 flex h-1 bottom-0 left-0 rounded-full`}>
        </div>
      </div>
    </>
  );
}


