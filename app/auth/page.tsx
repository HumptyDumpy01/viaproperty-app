// 'use client';

import AuthContainer from '@/components/Auth/AuthContainer';
import { Suspense } from 'react';

export type AuthPageType = 'login' | 'register' | 'forgot-password';

export default function AuthPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContainer />
    </Suspense>
  );
}