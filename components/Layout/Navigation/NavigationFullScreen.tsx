'use client';

type NavigationFullScreenType = {
  setNavigationOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // children: ReactNode;
}

import NavLink from '@/components/UI/Link/NavLInk';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function NavigationFullScreen({ setNavigationOpen }: NavigationFullScreenType) {
  const pathname = usePathname();

  return (
    <>
      <div>
        <ul className={`flex items-center justify-center flex-col gap-6 h-screen w-screen text-center`}>
          <li onClick={() => setNavigationOpen(false)}>
            <NavLink customFontSizeActive={`text-[30px]`} customFontSizeDefault={`text-[25px]`} label={`Home`}
                     path={`/`} isActive={pathname === '/'} />
          </li>
          <li onClick={() => setNavigationOpen(false)}>
            <NavLink customFontSizeActive={`text-[30px]`} customFontSizeDefault={`text-[25px]`} label={`Properties`}
                     path={`/properties`} isActive={pathname === '/properties'} />
          </li>
          <li onClick={() => setNavigationOpen(false)}>
            <NavLink customFontSizeActive={`text-[30px]`} customFontSizeDefault={`text-[25px]`}
                     label={`Sell My Property`} path={`/sell`} isActive={pathname === '/sell'} />
          </li>
          <li onClick={() => setNavigationOpen(false)}>
            <NavLink customFontSizeActive={`text-[30px]`} customFontSizeDefault={`text-[25px]`}
                     label={`Account Settings`} path={`/account-settings?page=account-settings`}
                     isActive={pathname === '/account-settings'} />
          </li>
        </ul>
      </div>
    </>
  );
}