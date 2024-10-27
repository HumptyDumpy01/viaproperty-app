// 'use client';

type NavigationFullScreenType = {
  setNavigationOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // children: ReactNode;
}

import NavLink from '@/components/UI/Link/NavLInk';
import React from 'react';

export default function NavigationFullScreen({ setNavigationOpen }: NavigationFullScreenType) {
  return (
    <>
      <div>
        <ul className={`flex items-center justify-center flex-col gap-6 h-screen w-screen text-center`}>
          <li onClick={() => setNavigationOpen(false)}>
            <NavLink customFontSizeActive={`text-[30px]`} customFontSizeDefault={`text-[25px]`} label={`Home`}
                     path={`/`} /></li>
          <li onClick={() => setNavigationOpen(false)}>
            <NavLink customFontSizeActive={`text-[30px]`} customFontSizeDefault={`text-[25px]`} label={`Properties`}
                     path={`/properties`} />
          </li>
          <li onClick={() => setNavigationOpen(false)}>
            <NavLink customFontSizeActive={`text-[30px]`} customFontSizeDefault={`text-[25px]`}
                     label={`Sell My Property`} path={`/sell`} />
          </li>
        </ul>
      </div>
    </>
  );
}
