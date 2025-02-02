'use client';
/*
type ProfilePageType = {
  // children: ReactNode;
}
*/

import MyProfile from '@/components/AccountSettings/Settings/MyProfile/MyProfile';
import ProviderContainer from '@/components/Layout/Provider/ProviderContainer';

export default function ProfilePage(/*{}: ProfilePageType*/) {
  return (
    <ProviderContainer>
      <MyProfile />
    </ProviderContainer>
  );
}
