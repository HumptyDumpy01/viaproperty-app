'use client';

import AccountSettings from '@/components/AccountSettings/AccountSettings';
import { ReactNode } from 'react';
import CustomApolloProvider from '@/components/Layout/Provider/ApolloProvider';
import ProviderContainer from '@/components/Layout/Provider/ProviderContainer';

type AccountSettingsLayout = {
  children: ReactNode;
}

export default function AccountSettingsLayout({ children }: AccountSettingsLayout) {
  return (
    <ProviderContainer>
      <CustomApolloProvider>
        <AccountSettings>{children}</AccountSettings>
      </CustomApolloProvider>
    </ProviderContainer>
  );
}