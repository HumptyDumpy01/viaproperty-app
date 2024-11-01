// 'use client';

import { ComponentPropsWithoutRef } from 'react';

type ButtonStatesType = {
  active: boolean;
  label: string;
  size?: 'small' | 'medium' | 'large';
  color?: `green` | `red`
  // children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

export default function ButtonActive({ active, label, size = `large`, color = `green`, ...props }: ButtonStatesType) {
  const greenStyles = `text-green-700 border border-green-700`;
  const redStyles = `text-red-500 border border-red-500`;
  const activeStyles = `font-bold rounded-full text-nowrap`;
  const largeStyles = `px-4 py-2`;

  const disabledStyles = `font-medium text-zinc-400 px-4 py-2 rounded-full
                  border border-zinc-300 text-nowrap`;

  let appliedColor;

  switch (color) {
    case `green`:
      appliedColor = `${greenStyles}`;
      break;
    case `red`:
      appliedColor = redStyles;
      break;
    default:
      appliedColor = `${greenStyles}`;
      break;
  }

  let appliedSize;

  switch (size) {
    case `small`:
      appliedSize = `text-[12px] px-4 py-[6px]`;
      break;
    case `medium`:
      appliedSize = `text-[13px] px-3 py-2`;
      break;
    case `large`:
      appliedSize = largeStyles;
      break;
    default:
      appliedSize = `text-[16px] px-4 py-2`;
      break;
  }

  return (
    <>
      <button {...props} type={`button`}
              className={`${appliedSize} ${active ? `${activeStyles} ${appliedColor}` : `${disabledStyles}`}`}>{label}
      </button>
    </>
  );
}
