// 'use client';

import { ComponentPropsWithoutRef, type ReactNode } from 'react';

type ParagraphType = {
  text: ReactNode;
  color?: `dark`;
  customClasses?: string;
  fontSize?: `text-sm`;
} & ComponentPropsWithoutRef<'p'>;

export default function Paragraph({
                                    text,
                                    color = `dark`,
                                    customClasses = ``,
                                    fontSize = `text-sm`,
                                    ...props
                                  }: ParagraphType) {
  const colorStyle = color === `dark` ? `text-zinc-900` : ``;
  return (
    <>
      <p {...props} className={`leading-relaxed ${colorStyle} ${customClasses} ${fontSize}`}>{text}</p>
    </>
  );
}
