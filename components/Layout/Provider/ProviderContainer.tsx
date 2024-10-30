'use client';

import { ReactNode } from 'react';
import ReduxProvider from '@/components/Layout/Provider/ReduxProvider';

type ProviderContainerType = {
  children: ReactNode;
}

export default function ProviderContainer({ children }: ProviderContainerType) {
  return (
    <ReduxProvider>
      {children}
    </ReduxProvider>
  );
}
