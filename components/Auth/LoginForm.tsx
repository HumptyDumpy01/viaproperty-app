'use client';

import { FormEvent, useState } from 'react';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import PasswordInput from '@/components/UI/Input/PasswordInput';
import TextualTooltip from '@/components/Layout/Tooltip/TextualTooltip';
import HighlightText from '@/components/Typography/HighlightText';
import Checkbox from '@/components/UI/Checkbox/Checkbox';
import ButtonSmall from '@/components/UI/Button/ButtonSmall';
import BtnFullScreen from '@/components/UI/Button/BtnFullScreen';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import BackdropMUI from '@/components/UI/Backdrop/BackdropMUI';
import { LoginSchema } from '@/utils/schemas/auth/loginSchema';
import { useLogin } from '@/hooks/mutations/useLogin';

export type LoginType = {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState<string>(`Please sign in first to proceed.`);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const { loginUser } = useLogin();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries()) as LoginType;

    const trimmedResults = {
      email: results.email.trim(),
      password: results.password.trim()
    } as LoginType;

    const validate = LoginSchema.safeParse(trimmedResults);

    if (!validate.success) {
      setErrorMessage(validate.error.errors[0].message);
      return;
    }

    setLoginLoading(true);
    setErrorMessage('');

    try {
      await loginUser(trimmedResults.email, trimmedResults.password).then(() => {
        setLoginLoading(false);
        // the user should be redirected to https://viaproperty-dev.netlify.app/
        window!.location.href = `/`;
      }).catch(() => {
        setLoginLoading(false);
        setErrorMessage(`Failed to authenticate user.`);
      });
      // @ts-ignore
    } catch (e: { message: string }) {
      setErrorMessage(e.message);
      setLoginLoading(false);
      console.error('Error logging in:', e);
      return;
    }
  }

  return (
    <>
      <BackdropMUI
        state={{ open: loginLoading, setOpen: setLoginLoading }}
        alertMessage={`Please wait till we log you in..`} />
      {errorMessage && (
        <div className={`mb-5`}>
          <ErrorMessage errorMessage={errorMessage} />
        </div>
      )}
      <form onSubmit={handleSubmit} className={`w-full`}>
        <div className={`flex flex-col gap-4 mb-3.5`}>
          <LabelAndInput defaultValue={`test@example.com`} showStar={false} labelStyle={`dark-blue`} name={`email`}
                         placeholder={`Enter "test@example.com"`}
                         customClassNames={`w-full`} label={`Email`}
                         inputType={`email`} required />
          <PasswordInput required showStar={false} icon={`eye`} label={`Password`} inputName={`password`}
                         placeholder={`Ask me for password :D`} />
        </div>
        <TextualTooltip text={(
          <>
            If your Authentication Method is <HighlightText style={`black`} text={`6-digit code`} />,&nbsp;
            you should verify your identity via email.
          </>
        )} />
        <div className={`flex items-center justify-between mb-12`}>
          <Checkbox label={`Remember Me`} name={`rememberMe`} />
          <ButtonSmall mode={`link`} href={`/auth/forgot-password`} label={`Forgot Password?`} />
        </div>
        <div className={`flex flex-col justify-center text-center gap-9`}>
          <BtnFullScreen type={`submit`} label={`Sign In`} size={`lg`} />
          <div className={`flex gap-7 items-center`}>
            <div className={`h-1 w-1/2 bg-zinc-100`}></div>
            <span
              className={`bg-clip-text text-2xl uppercase text-transparent bg-linear-main-dark-blue font-bold`}>or</span>
            <div className={`h-1 w-1/2 bg-zinc-100`}></div>
          </div>
          <BtnFullScreen icon={`google`} type={`button`} label={`Sign In`} size={`md`} />
        </div>
      </form>
    </>
  );
}