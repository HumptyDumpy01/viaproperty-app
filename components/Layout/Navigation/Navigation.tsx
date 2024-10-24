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
      <div className={`max-w-7xl mx-auto w-full mt-9`}>
        <nav className={`flex items-center`}>
          <Logo label={``} />
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
