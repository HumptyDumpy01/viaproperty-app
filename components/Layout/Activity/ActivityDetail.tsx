// 'use client';

import { type ReactNode } from 'react';
import AccountActivityIcon, { AccountActivityIconsTypeEnum } from '@/components/UI/Icon/AccountActivityIcon';
import Paragraph from '@/components/Typography/Paragraph';

type ActivityDetailType = {
  date: string;
  message: ReactNode;
  iconType: AccountActivityIconsTypeEnum;
  // children: ReactNode;
}

export default function ActivityDetail({ date, message, iconType }: ActivityDetailType) {
  return (
    <>
      <div className={`flex gap-5`}>
        <div className={`uppercase w-fit h-fit text-xl min-w-[72px] min-h-[72px] bg-linear-main-dark-blue
                text-white flex justify-center items-center rounded-full font-medium`}>
          <AccountActivityIcon type={iconType} />
        </div>
        <div className={`flex flex-col justify-center gap-2`}>
          <div className={`flex items-center gap-2.5 w-fit`}>
            <span className={`text-zinc-500 text-sm`}>{date}</span>
          </div>
          <Paragraph text={(
            <>
              {message}
            </>
          )} />
        </div>
      </div>
    </>
  );
}
