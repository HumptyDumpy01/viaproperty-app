// 'use client';

import ButtonActive from '@/components/UI/Button/ButtonActive';
import { ReactNode, useState } from 'react';
import MyProfile from '@/components/AccountSettings/MyProfile/MyProfile';
import MyAdverts from '@/components/AccountSettings/MyAdverts/MyAdverts';
import MyWishlist from '@/components/AccountSettings/MyWishlist/MyWishlist';
import MyPurchases from '@/components/AccountSettings/MyPurchases/MyPurchases';
import DeleteAccount from '@/components/AccountSettings/DeleteAccount/DeleteAccount';

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
        <div className={`max-w-screen-bp-896`}>
          <MyProfile />
        </div>
      );
      break;
    case `my-adverts`:
      content = (
        <MyAdverts />
      );
      break;
    case `wishlist`:
      content = (
        <>
          <MyWishlist />
        </>
      );
      break;
    case `my-purchases`:
      content = (
        <>
          <MyPurchases />
        </>
      );
      break;
    case `delete-account`:
      content = (
        <>
          <DeleteAccount />
        </>
      );
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
