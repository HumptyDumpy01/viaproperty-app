// 'use client';

type LabelAndTextBadgeType = {
  label: string;
  text: string;
  // children: ReactNode;
}

import React from 'react';

export default function LabelAndTextBadge({ label, text }: LabelAndTextBadgeType) {
  return (
    <>
      <div>
        <span className={`text-[12.8px] text-zinc-500`}>{label}</span>
        <p className={`bg-zinc-100 rounded-xl text-sm truncate px-4 py-3`}>{text}</p>
      </div>
    </>
  );
}
