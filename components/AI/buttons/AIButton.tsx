// 'use client';

import { ComponentPropsWithoutRef } from 'react';
import { Tooltip } from '@mui/material';
import AIIcon from '@/components/UI/Icon/AIIcon';

type AIButtonType = {
  tooltipText?: string;
  // children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

export default function AIButton({ tooltipText, ...props }: AIButtonType) {
  return (
    <Tooltip title={tooltipText || `Want some fancy AI text generation assistance? Click here!`}>
      <button {...props}
              className={`w-12 h-12 rounded-full bg-linear-dark-blue-to-orange flex items-center justify-center
            transition-all duration-300 hover:scale-125`}>
        <AIIcon />
      </button>
    </Tooltip>
  );
}
