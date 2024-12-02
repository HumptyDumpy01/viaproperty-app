// 'use client';

import { ComponentPropsWithoutRef } from 'react';

type PaginationButtonType = {
  page: number;
  active: boolean;
  // children: ReactNode;
} & ComponentPropsWithoutRef<'div'>;

export default function PaginationButton({ active, page, ...props }: PaginationButtonType) {
  return (
    <>
      {active ? (
        <div
          {...props}
          className={`flex items-center justify-center bg-linear-main-red w-10 h-10 rounded-full text-white font-semibold 
          cursor-pointer transition-all duration-200 hover:scale-125`}>{page}
        </div>
      ) : (
        <div
          {...props}
          className={`flex items-center justify-center border-[1.25px] border-red-500 w-10 h-10 rounded-full text-red-500 font-semibold 
          cursor-pointer transition-all duration-200 hover:scale-125`}>{page}
        </div>
      )}

    </>
  );
}
