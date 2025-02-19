// 'use client';

import CloseIcon from '@/components/UI/Icon/CloseIcon';
import TickIcon from '@/components/UI/Icon/TickIcon';
import { ReactNode } from 'react';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';

export type ValidationParStages = `error` | `neutral` | `success`;

type ValidationParagraphType = {
  stage: ValidationParStages;
  text: string;
  // children: ReactNode;
}

export default function ValidationParagraph({ stage, text }: ValidationParagraphType) {
  let styleApplied: string;
  let strokeColor: string = `#71717a`;
  let selectedIcon: ReactNode;

  switch (stage) {
    case 'error':
      styleApplied = `text-red-600`;
      strokeColor = `#dc2626`;
      selectedIcon = <CloseIcon strokeColor={strokeColor} width={15} height={15} />;
      break;

    case 'neutral':
      styleApplied = `text-zinc-500`;
      strokeColor = `#71717a`;
      selectedIcon = <ViapropertyIcon icon={`questionMark`} color={`grey`} />;
      break;
    case 'success':
      styleApplied = `text-green-600`;
      strokeColor = `#16a34a`;
      selectedIcon = <TickIcon height={15} width={15} strokeColor={strokeColor} />;
      break;
  }

  return (
    <>
      <p className={`text-sm mt-2 font-medium flex items-center gap-2 ${styleApplied}`}>
        {selectedIcon}
        {text}</p>
    </>
  );
}
