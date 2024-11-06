// 'use client';

import ButtonActive from '@/components/UI/Button/ButtonActive';
import { ReactNode, useEffect, useState } from 'react';
import MyProfile from '@/components/AccountSettings/Settings/MyProfile/MyProfile';
import MyAdverts from '@/components/AccountSettings/Settings/MyAdverts/MyAdverts';
import MyWishlist from '@/components/AccountSettings/Settings/MyWishlist/MyWishlist';
import MyPurchases from '@/components/AccountSettings/Settings/MyPurchases/MyPurchases';
import DeleteAccount from '@/components/AccountSettings/Settings/DeleteAccount/DeleteAccount';
import { useRouter, useSearchParams } from 'next/navigation';

export type ActiveSubPageType = `my-profile` | `my-adverts` | `wishlist` | `my-purchases` | `delete-account`;
export type ActiveProfilePageType = `overall` | `security`;

export default function AccountSettings() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const subPage = (searchParams.get('subpage') as ActiveSubPageType) || 'my-profile';

  const [activeSubPage, setActiveSubPage] = useState<ActiveSubPageType>(subPage);

  useEffect(() => {
    if (subPage !== activeSubPage) {
      setActiveSubPage(subPage);
    }
  }, [subPage]);

  useEffect(() => {
    // @ts-ignore
    router.push(`/account-settings?page=account-settings&subpage=${activeSubPage}`, undefined, { shallow: true });
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [activeSubPage, router]);

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
      content = <MyAdverts />;
      break;
    case `wishlist`:
      content = <MyWishlist />;
      break;
    case `my-purchases`:
      content = <MyPurchases />;
      break;
    case `delete-account`:
      content = <DeleteAccount />;
      break;
  }

  return (
    <div>
      <div className={`flex items-center gap-2 overflow-x-auto scrollbar-thin`}>
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
  );
}