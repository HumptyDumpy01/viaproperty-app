// 'use client';

import Paragraph from '@/components/Typography/Paragraph';
import React, { ReactNode } from 'react';

type HeadingWithParagraphType = {
  heading: string;
  paragraph: ReactNode;
  // children: ReactNode;
}

export default function HeadingWithParagraph({ heading, paragraph }: HeadingWithParagraphType) {
  return (
    <>
      <div>
        <h3 className={`text-2xl text-zinc-900 font-semibold mt-7`}>{heading}</h3>
        <Paragraph customClasses={`mt-6 max-w-5xl`} text={paragraph} />
      </div>
    </>
  );
}
