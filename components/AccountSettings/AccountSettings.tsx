'use client';

import ButtonActive from '@/components/UI/Button/ButtonActive';
import { ReactNode, useEffect, useState } from 'react';
import LoadingScreen from '@/components/Layout/Loading/LoadingScreen';

export type ActiveProfilePageType = `overall` | `security`;

type AccountSettingsType = {
  children: ReactNode;
}

type AccountSettsSubPages = `profile` | `my-adverts` | `my-purchases` | `wishlist` | `delete-account`;

export default function AccountSettings({ children }: AccountSettingsType) {
  const [activeSubPage, setActiveSubPage] = useState<AccountSettsSubPages>();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const possibleRoutes = [`profile`, `my-adverts`, `my-purchases`, `wishlist`, `delete-account`];

    if (window) {
      let subPath = window.location.href.split(
        `/account-settings/settings/`)[1] || ``;

      if (!possibleRoutes.includes(subPath)) {
        subPath = `profile`;
      }

      // @ts-ignore
      setActiveSubPage(() => subPath);
      setLoading(() => false);
    }

  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  function handleChangeAccountSettsRoute(route: AccountSettsSubPages) {
    if (activeSubPage === route) {
      return;
    }

    if (window) {
      window.location.href = `/account-settings/settings/${route}`;
    }
  }

  return (
    <div>
      <div className={`flex items-center gap-2 overflow-x-auto scrollbar-thin`}>
        <ButtonActive color={`red`} size={`medium`} onClick={() => handleChangeAccountSettsRoute('profile')}
                      active={activeSubPage === `profile`}
                      label={`My Profile`} />
        <ButtonActive color={`red`} size={`medium`} onClick={() => handleChangeAccountSettsRoute('my-adverts')}
                      active={activeSubPage === `my-adverts`}
                      label={`My Adverts`} />
        <ButtonActive color={`red`} size={`medium`} onClick={() => handleChangeAccountSettsRoute('wishlist')}
                      active={activeSubPage === `wishlist`}
                      label={`Wishlist`} />
        <ButtonActive color={`red`} size={`medium`} onClick={() => handleChangeAccountSettsRoute('my-purchases')}
                      active={activeSubPage === `my-purchases`}
                      label={`My Purchases`} />
        <ButtonActive color={`red`} size={`medium`} onClick={() => handleChangeAccountSettsRoute('delete-account')}
                      active={activeSubPage === `delete-account`}
                      label={`Delete Account`} />
      </div>
      <div className={`mt-9`}>
        {children}
      </div>
    </div>
  );
}