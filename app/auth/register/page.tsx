'use client';

import MainContainer from '@/components/Layout/Container/MainContainer';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import RegisterForm from '@/components/Auth/RegisterForm';
import { useAuthRedirect } from '@/hooks/custom-hooks/useAuthRedirect';

export default function Register() {
  useAuthRedirect();
  return (
    <MainContainer>
      <div className={`flex flex-col mt-12 max-w-[464px] m-auto`}>
        <h1
          className={`bg-clip-text mb-6 text-transparent self-center
            pb-3 text-6xl bg-linear-main-dark-blue font-bold w-fit`}>
          Register Now!
        </h1>
        <div className={`flex items-center gap-2.5 text-left mb-9 overflow-x-auto scrollbar-corner-red-400`}>
          <ButtonActive mode={`link`} href={`/auth/login`} active={false} label={`Login`} />
          <ButtonActive active={true}
                        label={`Register`} />
          <ButtonActive mode={`link`} href={`/auth/forgot-password`} active={false}
                        label={`Forgot Password`} />
        </div>

        <RegisterForm />
      </div>
    </MainContainer>
  );
}
