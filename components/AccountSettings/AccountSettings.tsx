'use client';

import ButtonActive from '@/components/UI/Button/ButtonActive';
import MyProfile from '@/components/AccountSettings/Settings/MyProfile/MyProfile';

export type ActiveProfilePageType = `overall` | `security`;

export default function AccountSettings() {

  function handleChangeAccountSettsRoute(route: string) {
  }

  return (
    <div>
      <div className={`flex items-center gap-2 overflow-x-auto scrollbar-thin`}>
        <ButtonActive color={`red`} size={`medium`} onClick={() => handleChangeAccountSettsRoute('my-profile')}
                      active={true}
                      label={`My Profile`} />
        <ButtonActive color={`red`} size={`medium`} onClick={() => handleChangeAccountSettsRoute('my-adverts')}
                      active={false}
                      label={`My Adverts`} />
        <ButtonActive color={`red`} size={`medium`} onClick={() => handleChangeAccountSettsRoute('wishlist')}
                      active={false}
                      label={`Wishlist`} />
        <ButtonActive color={`red`} size={`medium`} onClick={() => handleChangeAccountSettsRoute('my-purchases')}
                      active={false}
                      label={`My Purchases`} />
        <ButtonActive color={`red`} size={`medium`} onClick={() => handleChangeAccountSettsRoute('delete-account')}
                      active={false}
                      label={`Delete Account`} />
      </div>
      <div className={`mt-9`}>
        <MyProfile />
      </div>
    </div>
  );
}