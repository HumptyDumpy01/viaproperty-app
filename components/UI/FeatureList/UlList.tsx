// 'use client';

type UlListType = {
  list: { href: string, linkLabel: string }[]
  // children: ReactNode;
}

import Link from 'next/link';
import React from 'react';

export default function UlList({ list }: UlListType) {
  return (
    <>
      <ul className={`font-semibold text-xl bp-732:space-y-2 space-y-4`}>
        {list.map(function(list, index) {
          return (
            <li key={index}>
              <Link href={list.href}>{list.linkLabel}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
