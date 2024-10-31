// 'use client';

import CloseIcon from '@/components/UI/Icon/CloseIcon';

type TagBadgeType = {
  label: string;
  // children: ReactNode;
}

export default function TagBadge({ label }: TagBadgeType) {
  return (
    <>
      <div className={`font-semibold text-nowrap text-zinc-600 px-4 py-2 flex items-center gap-2
                  border border-zinc-600 rounded-full`}>
        <span className={`inline-block`}>{label}</span>
        <CloseIcon height={16} width={16} variant={`small`} />
      </div>
    </>
  );
}
