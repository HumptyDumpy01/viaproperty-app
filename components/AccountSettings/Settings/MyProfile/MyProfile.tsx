'use client';

/*type MyProfileType = {
  // children: ReactNode;
}*/

import UserData from '@/components/UI/User/UserData';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import { useEffect, useState } from 'react';
import { ActiveProfilePageType } from '@/components/AccountSettings/AccountSettings';
import Overall from '@/components/AccountSettings/Settings/MyProfile/Overall';
import Security, { AuthMethodType } from '@/components/AccountSettings/Settings/MyProfile/Security';
import { useCartSelector } from '@/store/hooks';
import { abbreviateInitials } from '@/utils/functions/abbreviateInitials';
import { useGetUserAuthMethod } from '@/hooks/queries/useGetUserAuthMethod';
import LoadingScreen from '@/components/Layout/Loading/LoadingScreen';

export default function MyProfile(/*{  }: MyProfileType*/) {
  const { data, loading } = useGetUserAuthMethod();
  const [currentAuthMethod, setCurrentAuthMethod] = useState<AuthMethodType>();
  const [activeProfilePage, setActiveProfilePage] = useState<ActiveProfilePageType>(`overall`);
  const userInitials = useCartSelector((state) => state.navigation.userInitials);
  const userEmail = useCartSelector((state) => state.navigation.userEmail);

  useEffect(() => {
    if (data) {
      setCurrentAuthMethod(() => data?.getUserAuthMethod?.authMethod);
    }
  }, [data, loading]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div className={`profile-container`}>
        <div className={`mb-8`}>
          <UserData paragraph={userEmail} initials={userInitials} abbrInitials={abbreviateInitials(userInitials)}
                    online={true} />
        </div>
        <div className={`flex gap-2 items-center mb-8`}>
          <ButtonActive color={`red`} size={`small`} onClick={() => setActiveProfilePage('overall')}
                        active={activeProfilePage === 'overall'}
                        label={`Overall`} />
          {currentAuthMethod !== `google-provider` && (
            <ButtonActive color={`red`} size={`small`} onClick={() => setActiveProfilePage('security')}
                          active={activeProfilePage === 'security'}
                          label={`Security`} />
          )}
        </div>
        <div className={`flex flex-col`}>
          {activeProfilePage === `overall` && (
            <Overall authMethod={currentAuthMethod} userInitials={userInitials} userEmail={userEmail} />
          )}
          {activeProfilePage === `security` && (
            <>
              {currentAuthMethod !== `google-provider` && (
                // @ts-ignore
                <Security setCurrentAuthMethod={setCurrentAuthMethod} loading={loading} data={data}
                          currentAuthMethod={currentAuthMethod!} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
