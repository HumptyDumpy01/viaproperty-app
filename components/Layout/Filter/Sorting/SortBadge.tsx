// 'use client';

import { ComponentPropsWithoutRef } from 'react';

type SortBadgeType = {
  active: boolean;
  label: string;
  // children: ReactNode;
} & ComponentPropsWithoutRef<'span'>;

export default function SortBadge({ active, label, ...props }: SortBadgeType) {
  const activeStyle = `bg-clip-text text-transparent bg-linear-main-red w-fit font-bold text-[12px] px-4 
            py-2 border border-red-500 rounded-full`;
  const inactiveStyle = `text-zinc-400 w-fit font-medium text-[12px] px-4 
            py-2 border border-zinc-400 rounded-full`;

  const appliedStyles = active ? activeStyle : inactiveStyle;
  return (
    <>
      <span {...props} className={`cursor-pointer w-full text-center ${appliedStyles}`}>{label}</span>
    </>
  );
}
