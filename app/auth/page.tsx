'use client';

import MainContainer from '@/components/Layout/Container/MainContainer';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import { useRouter, useSearchParams } from 'next/navigation';
import NotFound from 'next/dist/client/components/not-found-error';
import { useEffect, useState } from 'react';
import LoginForm from '@/components/Auth/LoginForm';
import RegisterForm from '@/components/Auth/RegisterForm';

export type AuthPageType = 'login' | 'register' | 'forgot-password';

export default function AuthPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get('page') as AuthPageType;

  const availablePages = ['login', 'register', 'forgot-password'];

  if (!availablePages.includes(page)) {
    NotFound();
  }

  const [activePage, setActivePage] = useState<AuthPageType>(page);

  useEffect(() => {
    // @ts-ignore
    router.push(`?page=${activePage}`, undefined, { shallow: true });
  }, [activePage, router]);

  const headingText = activePage === 'login' ? 'Login Now!' : activePage === 'register' ? 'Sign up!' : 'Reset Password';

  return (
    <MainContainer>
      <div className={`flex flex-col mt-12 max-w-[464px] m-auto`}>
        <h1
          className={`bg-clip-text mb-6 text-transparent self-center pb-3 text-6xl bg-linear-main-dark-blue font-bold w-fit`}>
          {headingText}
        </h1>
        <div className={`flex items-center gap-2.5 text-left mb-9`}>
          <ButtonActive onClick={() => setActivePage('login')} active={activePage === 'login'} label={`Login`} />
          <ButtonActive onClick={() => setActivePage('register')} active={activePage === 'register'}
                        label={`Register`} />
          <ButtonActive onClick={() => setActivePage('forgot-password')} active={activePage === 'forgot-password'}
                        label={`Forgot Password`} />
        </div>

        {activePage === 'login' && <LoginForm setActivePage={setActivePage} />}
        {activePage === 'register' && <RegisterForm setActivePage={setActivePage} />}
      </div>
    </MainContainer>
  );
}