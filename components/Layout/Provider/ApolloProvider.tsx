'use client';

import { ReactNode } from 'react';
import { ApolloProvider as ApolloClientProvider } from '@apollo/client';
import client from '@/lib/apolloClient';

type CustomApolloProviderType = {
  children: ReactNode;
}

export default function CustomApolloProvider({ children }: CustomApolloProviderType) {
  return (
    <ApolloClientProvider client={client}>
      {children}
    </ApolloClientProvider>
  );
}