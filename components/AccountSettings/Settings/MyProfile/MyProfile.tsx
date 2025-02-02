// 'use client';

/*type MyProfileType = {
  // children: ReactNode;
}*/

import UserData from '@/components/UI/User/UserData';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import { useState } from 'react';
import { ActiveProfilePageType } from '@/components/AccountSettings/AccountSettings';
import Overall from '@/components/AccountSettings/Settings/MyProfile/Overall';
import Security from '@/components/AccountSettings/Settings/MyProfile/Security';
import { useCartSelector } from '@/store/hooks';
import { abbreviateInitials } from '@/utils/functions/abbreviateInitials';

export default function MyProfile(/*{  }: MyProfileType*/) {
  const [activeProfilePage, setActiveProfilePage] = useState<ActiveProfilePageType>(`overall`);
  const userInitials = useCartSelector((state) => state.navigation.userInitials);
  const userEmail = useCartSelector((state) => state.navigation.userEmail);

  return (
    <>
      <div>
        <div className={`mb-8`}>
          <UserData paragraph={userEmail} initials={userInitials} abbrInitials={abbreviateInitials(userInitials)}
                    online={true} />
        </div>
        <div className={`flex gap-2 items-center mb-8`}>
          <ButtonActive color={`red`} size={`small`} onClick={() => setActiveProfilePage('overall')}
                        active={activeProfilePage === 'overall'}
                        label={`Overall`} />
          <ButtonActive color={`red`} size={`small`} onClick={() => setActiveProfilePage('security')}
                        active={activeProfilePage === 'security'}
                        label={`Security`} />
        </div>
        <div className={`flex flex-col`}>
          {activeProfilePage === `overall` && (
            <Overall userInitials={userInitials} userEmail={userEmail} />
          )}
          {activeProfilePage === `security` && (
            <>
              <Security />
            </>
          )}
        </div>
      </div>
    </>
  );
}
