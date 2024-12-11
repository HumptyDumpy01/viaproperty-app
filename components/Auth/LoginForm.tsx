'use client';

import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import PasswordInput from '@/components/UI/Input/PasswordInput';
import TextualTooltip from '@/components/Layout/Tooltip/TextualTooltip';
import HighlightText from '@/components/Typography/HighlightText';
import Checkbox from '@/components/UI/Checkbox/Checkbox';
import ButtonSmall from '@/components/UI/Button/ButtonSmall';
import BtnFullScreen from '@/components/UI/Button/BtnFullScreen';
import { FormEvent, useState } from 'react';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import { LoginSchema } from '@/utils/schemas/auth/loginSchema';


export type LoginType = {
  email: string;
  password: string;
}

// type LoginFormType = {}

export default function LoginForm(/*{ setActivePage }: LoginFormType*/) {
  const [errorMessage, setErrorMessage] = useState<string>(``);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
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

    // resetting the form
    currObject.reset();
    // output
    console.log(results);
  }

  return (
    <>
      {errorMessage && (
        <>
          <div className={`mb-5`}>
            <ErrorMessage errorMessage={errorMessage} />
          </div>
        </>
      )}
      <form onSubmit={handleSubmit} className={`w-full`}>
        <div className={`flex flex-col gap-4 mb-3.5`}>
          <LabelAndInput showStar={false} labelStyle={`dark-blue`} name={`email`} placeholder={`Enter your email`}
                         customClassNames={`w-full`} label={`Email`}
                         inputType={`email`} required />

          <PasswordInput showStar={false} required icon={`eye`} label={`Password`} inputName={`password`}
                         placeholder={`Enter your password`} />
        </div>

        <TextualTooltip text={(
          <>
            If your Authentication Method is <HighlightText style={`black`} text={`6-digit code`} />&nbsp;
            you do not need to enter password here.
          </>
        )} />

        <div className={`flex items-center justify-between mb-12`}>
          <div>
            <Checkbox label={`Remember Me`} name={`rememberMe`} />
          </div>
          <ButtonSmall label={`Forgot Password?`} />
        </div>
        <div className={`flex flex-col justify-center text-center gap-9`}>
          <BtnFullScreen type={`submit`} label={`Sign In`} size={`lg`} />

          <div className={`flex gap-7 items-center`}>
            <div className={`h-1 w-1/2 bg-zinc-100`}></div>
            <span
              className={`bg-clip-text text-2xl uppercase text-transparent bg-linear-main-dark-blue font-bold`}>or</span>
            <div className={`h-1 w-1/2 bg-zinc-100`}></div>
          </div>
          <div>
            <BtnFullScreen icon={`google`} type={`button`} label={`Sign In`} size={`md`} />
          </div>
        </div>
      </form>
    </>
  );
}
