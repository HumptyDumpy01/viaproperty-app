// 'use client';

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
          <div className={`flex gap-12 mr-20`}>
            <NavLink label={`Home`} path={`/`} type={`active`} />
            <NavLink label={`Properties`} path={`/properties`} type={`default`} />
            <NavLink label={`Sell My Property`} path={`/sell`} type={`default`} />
          </div>
          <Input />
          <div className={`ml-auto flex gap-7 items-center`}>
            <Heart />
            <Bell />
            <UserCredentials initials={`Nikolas Tuz`} location={`California, USA`} abbrInitials={`N.B`} />
          </div>

        </nav>
      </div>
    </>
  );
}
