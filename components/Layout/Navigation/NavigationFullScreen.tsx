// 'use client';

/*type NavigationFullScreenType = {
  // children: ReactNode;
}*/

import NavLink from '@/components/UI/Link/NavLInk';
import React from 'react';

export default function NavigationFullScreen(/*{  }: NavigationFullScreenType*/) {
  return (
    <>
      <div>
        <ul className={`flex items-center justify-center flex-col gap-6 h-screen text-center`}>
          <li>
            <NavLink customFontSizeActive={`text-[30px]`} customFontSizeDefault={`text-[25px]`} label={`Home`}
                     path={`/`} />
          </li>
          <li>
            <NavLink customFontSizeActive={`text-[30px]`} customFontSizeDefault={`text-[25px]`} label={`Properties`}
                     path={`/properties`} />
          </li>
          <li>
            <NavLink customFontSizeActive={`text-[30px]`} customFontSizeDefault={`text-[25px]`}
                     label={`Sell My Property`} path={`/sell`} />
          </li>
        </ul>
      </div>
    </>
  );
}
