// 'use client';

type AccountSettingsPageType = {
  children: ReactNode;
}

import AccountSettingsContainer from '@/components/AccountSettings/AccountSettingsContainer';
import { ReactNode, Suspense } from 'react';
import LoadingScreen from '@/components/Layout/Loading/LoadingScreen';


export default function AccountSettingsPage({ children }: AccountSettingsPageType) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AccountSettingsContainer>{children}</AccountSettingsContainer>
    </Suspense>
  );
}
