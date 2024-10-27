'use client';

import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '@/store/store';

type ReduxProviderType = {
  children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderType) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
