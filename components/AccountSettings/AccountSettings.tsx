// 'use client';

import ButtonActive from '@/components/UI/Button/ButtonActive';
import { ReactNode, useState } from 'react';
import MyProfile from '@/components/AccountSettings/MyProfile/MyProfile';

/*type AccountSettingsType = {
  // children: ReactNode;
}*/

export type ActiveSubPageType = `my-profile` | `my-adverts` | `wishlist` | `my-purchases` | `delete-account`;
export type ActiveProfilePageType = `overall` | `security`;

export default function AccountSettings(/*{}: AccountSettingsType*/) {
  const [activeSubPage, setActiveSubPage] = useState<ActiveSubPageType>(`my-profile`);
  let content: ReactNode;

  switch (activeSubPage) {
    case `my-profile`:
      content = (
        <MyProfile />
      );
      break;
  }

  return (
    <>
      <div>
        <div className={`flex items-center gap-2`}>
          <ButtonActive color={`red`} size={`medium`} onClick={() => setActiveSubPage('my-profile')}
                        active={activeSubPage === 'my-profile'}
                        label={`My Profile`} />
          <ButtonActive color={`red`} size={`medium`} onClick={() => setActiveSubPage('my-adverts')}
                        active={activeSubPage === 'my-adverts'}
                        label={`My Adverts`} />

          <ButtonActive color={`red`} size={`medium`} onClick={() => setActiveSubPage('wishlist')}
                        active={activeSubPage === 'wishlist'}
                        label={`Wishlist`} />
          <ButtonActive color={`red`} size={`medium`} onClick={() => setActiveSubPage('my-purchases')}
                        active={activeSubPage === 'my-purchases'}
                        label={`My Purchases`} />
          <ButtonActive color={`red`} size={`medium`} onClick={() => setActiveSubPage('delete-account')}
                        active={activeSubPage === 'delete-account'}
                        label={`Delete Account`} />
        </div>
        <div className={`mt-9`}>
          {content}
        </div>
      </div>
    </>
  );
}
