'use client';

/*type MyProfileType = {
  // children: ReactNode;
}*/

import UserData from '@/components/UI/User/UserData';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import { useState } from 'react';
import { ActiveProfilePageType } from '@/components/AccountSettings/AccountSettings';
import Overall from '@/components/AccountSettings/MyProfile/Overall';
import Security from '@/components/AccountSettings/MyProfile/Security';

export default function MyProfile(/*{  }: MyProfileType*/) {
  const [activeProfilePage, setActiveProfilePage] = useState<ActiveProfilePageType>(`overall`);

  return (
    <>
      <div>
        <div className={`mb-8`}>
          <UserData paragraph={`tuznikolas@gmail.com`} initials={`Nikolas Baker`} abbrInitials={`N.B`}
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
            <>
              <Overall />
            </>
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
