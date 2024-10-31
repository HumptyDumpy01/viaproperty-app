// 'use client';

import { type ReactNode } from 'react';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';

type TextualTooltipType = {
  text: ReactNode;
}

export default function TextualTooltip({ text }: TextualTooltipType) {
  return (
    <>
      <div className={`flex items-center gap-2.5 mb-6`}>
        <div>
          <ViapropertyIcon icon={`questionMarkGrey`} />
        </div>
        <div>
          <p className={`text-sm text-zinc-800 leading-relaxed`}>{text}</p>
        </div>
      </div>
    </>
  );
}
