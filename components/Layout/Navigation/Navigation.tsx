'use client';

/*type NavigationType = {
  // children: ReactNode;
}*/

import NavLink from '@/components/UI/Link/NavLInk';
import React from 'react';
import Input from '@/components/UI/Input/Input';
import Logo from '@/components/UI/Logo/Logo';
import Heart from '@/components/UI/Icon/Heart';
import Bell from '@/components/UI/Icon/Bell';
import UserCredentials from '@/components/Layout/Other/UserCredentials';

export default function Navigation(/*{  }: NavigationType*/) {
  return (
    <>
      <div className={`inset-0 w-screen h-screen fixed bg-white/95 z-50 bp-1178:opacity-0 opacity-100 pointer-events-hidden
      bp-1178:pointer-events-none translate-y-full transition-all duration-200`}>
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
      </div>
      <div className={`max-w-7xl mx-auto w-full mt-9`}>
        <nav className={`flex items-center`}>
          <Logo link href={`/`} label={``} />
          <div className={`flex mr-4 bp-1178:hidden`}>
            <svg className={``} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
                 fill="none">
              <path d="M4 5H20M18 12H6M8 19H16" stroke="#FF3030" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
          </div>
          <div className={`bp-1178:flex gap-12 mr-20 hidden items-center`}>
            <NavLink label={`Home`} path={`/`} />
            <NavLink label={`Properties`} path={`/properties`} />
            <NavLink label={`Sell My Property`} path={`/sell`} />
          </div>
          <div className={`hidden bp-750:flex`}>
            <Input />
          </div>
          <div className={`ml-auto flex gap-7 items-center`}>
            <div className={`hidden bp-480:flex gap-7 items-center`}>
              <Heart />
              <Bell />
            </div>
            <UserCredentials initials={`Nikolas Tuz`} location={`California, USA`} abbrInitials={`N.B`} />
          </div>

        </nav>
      </div>
    </>
  );
}
