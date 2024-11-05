// 'use client';

import CloseIcon from '@/components/UI/Icon/CloseIcon';
import { Tooltip } from '@mui/material';

type TagBadgeType = {
  label: string;
  setItems?: (label: string) => void;
  // children: ReactNode;
}

export default function TagBadge({ label, setItems }: TagBadgeType) {
  return (
    <>
      <Tooltip title={`Remove`} placement={`top`}>
        <div onClick={setItems ? () => setItems(label) : undefined} className={`font-semibold cursor-pointer text-nowrap text-zinc-600 px-4 py-2 flex items-center gap-2
                  border border-zinc-600 rounded-full`}>
          <span className={`inline-block`}>{label}</span>
          <CloseIcon height={16} width={16} variant={`small`} />
        </div>
      </Tooltip>
    </>
  );
}
