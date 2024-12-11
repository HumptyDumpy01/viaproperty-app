// 'use client';

import AuthContainer from '@/components/Auth/AuthContainer';
import { Suspense } from 'react';
import LoadingScreen from '@/components/Layout/Loading/LoadingScreen';

export type AuthPageType = 'login' | 'register' | 'forgot-password';

export default function AuthPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AuthContainer />
    </Suspense>
  );
}