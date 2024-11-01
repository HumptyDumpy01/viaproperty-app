// 'use client';

import { type ReactNode } from 'react';

type ParagraphType = {
  text: ReactNode;
  color?: `dark`;
  customClasses?: string;
  fontSize?: `text-sm`;
}

export default function Paragraph({ text, color = `dark`, customClasses = ``, fontSize = `text-sm` }: ParagraphType) {
  const colorStyle = color === `dark` ? `text-zinc-900` : ``;
  return (
    <>
      <p className={`leading-relaxed ${colorStyle} ${customClasses} ${fontSize}`}>{text}</p>
    </>
  );
}
