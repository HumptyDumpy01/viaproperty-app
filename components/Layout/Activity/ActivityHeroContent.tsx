'use client';

type ActivityHeroContentType = {
  copyToClipboard: boolean;
  messageFont: string;
  message: ReactNode;
  // children: ReactNode;
}

import Paragraph from '@/components/Typography/Paragraph';
import { Tooltip } from '@mui/material';
import { ReactNode, useState } from 'react';

export default function ActivityHeroContent({ copyToClipboard, message, messageFont }: ActivityHeroContentType) {
  const [copyToClipboardText, setCopyToClipboardText] = useState(`Click to Copy`);

  async function changeTooltipText() {
    // When the user clicks on the tooltip, the text will change to "Copied", and then after 2 seconds it will change back to "Click to Copy"
    setCopyToClipboardText(`Copied`);
    setTimeout(() => {
      setCopyToClipboardText(`Click to Copy`);
    }, 3000);

    // Copy the message to the clipboard
    // @ts-ignore
    await navigator.clipboard.writeText(message?.toString());
  }

  return (
    <>
      <>
        <Paragraph text={(
          <Tooltip onClick={() => changeTooltipText()} title={copyToClipboard ? copyToClipboardText : ``}
                   followCursor>
            <span className={messageFont}>
              {message}
            </span>
          </Tooltip>
        )} />
      </>
    </>
  );
}
