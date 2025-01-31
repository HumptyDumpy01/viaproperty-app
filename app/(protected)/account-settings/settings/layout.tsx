import AccountSettings from '@/components/AccountSettings/AccountSettings';
import { ReactNode } from 'react';

type AccountSettingsLayout = {
  children: ReactNode;
}

export default function AccountSettingsLayout({ children }: AccountSettingsLayout) {
  return (
    <AccountSettings>{children}</AccountSettings>
  );
}