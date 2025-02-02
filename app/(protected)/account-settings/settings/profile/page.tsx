'use client';
/*
type ProfilePageType = {
  // children: ReactNode;
}
*/

import MyProfile from '@/components/AccountSettings/Settings/MyProfile/MyProfile';
import ProviderContainer from '@/components/Layout/Provider/ProviderContainer';
import CustomApolloProvider from '@/components/Layout/Provider/ApolloProvider';

export default function ProfilePage(/*{}: ProfilePageType*/) {
  return (
    <CustomApolloProvider>
      <ProviderContainer>
        <MyProfile />
      </ProviderContainer>
    </CustomApolloProvider>
  );
}
