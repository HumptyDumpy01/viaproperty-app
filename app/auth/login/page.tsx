'use client';

import MainContainer from '@/components/Layout/Container/MainContainer';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import LoginForm from '@/components/Auth/LoginForm';

export default function Login() {
  return (
    <MainContainer>
      <div className={`flex flex-col mt-12 max-w-[464px] m-auto`}>
        <h1
          className={`bg-clip-text mb-6 text-transparent self-center
            pb-3 text-6xl bg-linear-main-dark-blue font-bold w-fit`}>
          Login Now!
        </h1>
        <div className={`flex items-center gap-2.5 text-left mb-9 overflow-x-auto scrollbar-corner-red-400`}>
          <ButtonActive label={`Login`} active={true} />
          <ButtonActive mode={`link`} href={`/auth/register`} active={false}
                        label={`Register`} />
          <ButtonActive mode={`link`} href={`/auth/forgot-password`} active={false}
                        label={`Forgot Password`} />
        </div>

        <LoginForm />
      </div>
    </MainContainer>
  );
}
