'use client';

/*type ForgotPasswordPageType = {
  // children: ReactNode;
}*/

import MainContainer from '@/components/Layout/Container/MainContainer';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import ForgotPassword from '@/components/Auth/ForgotPassword/ForgotPassword';
import { useAuthRedirect } from '@/hooks/custom-hooks/useAuthRedirect';

export default function ForgotPasswordPage(/*{  }: ForgotPasswordPageType*/) {
  useAuthRedirect();
  return (
    <MainContainer>
      <div className={`flex flex-col mt-12`}>
        <h1
          className={`bg-clip-text mb-6 text-transparent
            pb-3 text-6xl bg-linear-main-dark-blue font-bold w-fit`}>
          Reset Your Password!
        </h1>
        <div className={`flex items-center gap-2.5 text-left mb-9 overflow-x-auto scrollbar-corner-red-400`}>
          <ButtonActive mode={`link`} href={`/auth/login`} active={false} label={`Login`} />
          <ButtonActive mode={`link`} href={`/auth/register`} active={false}
                        label={`Register`} />
          <ButtonActive active={true}
                        label={`Forgot Password`} />
        </div>
        <ForgotPassword />
      </div>
    </MainContainer>
  );
}
