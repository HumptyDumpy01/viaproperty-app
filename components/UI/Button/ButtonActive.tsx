'use client';

import { ComponentPropsWithoutRef, useRef } from 'react';
import Link from 'next/link';
import { Tooltip } from '@mui/material';

type ButtonStatesType = {
  active: boolean;
  label: string;
  size?: 'small' | 'medium' | 'large';
  color?: `green` | `red`;
  mode?: `link` | `button`;
  href?: string; // Add href prop for link mode
  disabledTooltipText?: string;
} & ComponentPropsWithoutRef<'button'> & ComponentPropsWithoutRef<'a'>;

export default function
  ButtonActive({
                 active,
                 label,
                 size = `large`,
                 color = `green`,
                 mode = `button`,
                 href,
                 disabledTooltipText,
                 ...props
               }: ButtonStatesType) {
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

  const className = `${appliedSize} ${active ? `${activeStyles} ${appliedColor}` : `${disabledStyles}`}`;
  const buttonRef = useRef<HTMLButtonElement>(null);

  if (mode === `link`) {
    return (
      <Link {...props} href={href!} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <Tooltip title={buttonRef?.current?.disabled ? disabledTooltipText || `The Button is disabled.` : ``}>
      <button ref={buttonRef} {...props} type={`button`} className={className}>
        {label}
      </button>
    </Tooltip>
  );
}