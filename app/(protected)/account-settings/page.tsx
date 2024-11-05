// 'use client';

/*type AccountSettingsPageType = {
  // children: ReactNode;
}*/

import AccountSettingsContainer from '@/components/AccountSettings/AccountSettingsContainer';
import { Suspense } from 'react';

export type AccountSettingsPageType = `account-settings` | `chats` | `balance`;

export default function AccountSettingsPage(/*{  }: AccountSettingsPageType*/) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AccountSettingsContainer />
    </Suspense>
  );
}
