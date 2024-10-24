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
      <ul className={`font-semibold text-xl space-y-2`}>
        {list.map(function(list) {
          return (
            <li key={list.href}>
              <Link href={list.href}>{list.linkLabel}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
