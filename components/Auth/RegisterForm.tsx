// 'use client';

import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import PasswordInput from '@/components/UI/Input/PasswordInput';
import ButtonSmall from '@/components/UI/Button/ButtonSmall';
import BtnFullScreen from '@/components/UI/Button/BtnFullScreen';
import SelectAndTooltip from '@/components/UI/Select/SelectAndTooltip';
import { FormEvent, useState } from 'react';
import { registerSchema } from '@/utils/schemas/auth/registerSchema';
import { scrollIntoViewFunc } from '@/utils/functions/scrollIntoViewFunc';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import BackdropMUI from '@/components/UI/Backdrop/BackdropMUI';
import { useCreateRegistrationToken } from '@/hooks/mutations/useCreateRegistrationToken';
import { useCreateNewUser } from '@/hooks/mutations/useCreateNewUser';
import { setAccessTokenCookie } from '@/utils/functions/setAccessTokenCookie';

// type RegisterFormType = {}

export type AuthenticationMethodType = `code` | `password` | `2FA`;

type RegisterSchemaType = {
  email: string;
  initials: string;
  password: string;
  confirmPassword: string;
  authenticationMethod: AuthenticationMethodType;
}

type ConfirmCodeType = {
  code: string;
}

type UserDataType = {
  email: string;
  initials: string;
  password: string;
  confirmPassword: string;
  authenticationMethod: AuthenticationMethodType;
}

export default function RegisterForm(/*{ setActivePage }: RegisterFormType*/) {
  const { generateRegistrationToken } = useCreateRegistrationToken();
  const { createNewUser } = useCreateNewUser();

  const [registrationStage, setRegistrationStage] = useState<1 | 2>(1);
  const [errorMessage, setErrorMessage] = useState(``);
  const [backdropVisibility, setBackdropVisibility] = useState(false);

  const [userData, setUserData] = useState<UserDataType>();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries()) as RegisterSchemaType;
    const validate = registerSchema.safeParse({ ...results });

    if (!validate.success) {
      setErrorMessage(validate.error.errors[0].message);
      scrollIntoViewFunc(`.register-heading`);
      return;
    }
    setErrorMessage(() => ``);
    scrollIntoViewFunc(`.register-heading`);

    try {
      setBackdropVisibility(() => true);
      const response = await generateRegistrationToken({ email: results.email });

      if (response?.data?.message) {
        setErrorMessage(() => response?.data?.message);
        setBackdropVisibility(() => false);
        return;
      }
      setBackdropVisibility(() => false);
      setRegistrationStage(() => 2);


    } catch (e) {
      console.error(e);
      setErrorMessage(() => `Failed to send verification token..`);
      setBackdropVisibility(() => false);
    }

    const { email, confirmPassword, password, initials, authenticationMethod } = results;
    setUserData({ email, confirmPassword, password, initials, authenticationMethod });


  }

  async function handleRegisterUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries()) as ConfirmCodeType;

    if (results?.code?.trim().length !== 6) {
      setErrorMessage(() => `Enter valid 6 digit code.`);
      return;
    }
    setErrorMessage(() => ``);

    if (userData && results?.code) {
      setBackdropVisibility(() => true);
      const { email, confirmPassword, password, initials, authenticationMethod } = userData;
      const { code } = results;

      try {
        const response = await createNewUser({
          email,
          confirmPassword,
          password,
          initials,
          authMethod: authenticationMethod,
          verificationToken: code
        });

        if (response?.data.message) {
          setBackdropVisibility(() => false);

          setErrorMessage(() => response?.data.message);
          return;
        }
        setErrorMessage(() => ``);

        if (response.data.createUser.accessToken) {
          setAccessTokenCookie(response.data.createUser.accessToken);
          // redirect user to the home page.
          window.location.href = `/`;
        }
      } catch (e) {
        console.error(e);
        setBackdropVisibility(() => false);
        setErrorMessage(() => `Failed to register user. Please try again later.`);
      }


    }


  }

  function handleOnLinkClick() {
    if (registrationStage === 1) {
      if (typeof window !== 'undefined') {
        window.location.href = `/auth/login`;
      }
      return;
    }

    setErrorMessage(() => ``);
    setRegistrationStage(() => 1);
  }

  return (
    <>
      <BackdropMUI state={{ open: backdropVisibility, setOpen: setBackdropVisibility }}
                   alertMessage={registrationStage === 1 ? `Please wait til we send you verification code to your email..` : `
                   Hey! I am trying to log you in.. Please wait.`} />
      {errorMessage && (
        <div className={`mb-2`}>
          <ErrorMessage errorMessage={errorMessage} />
        </div>
      )}
      <form onSubmit={registrationStage === 1 ? handleSubmit : handleRegisterUser} className={`w-full register-form`}>
        {registrationStage === 1 && (
          <>
            <div className={`flex flex-col gap-4 mb-12`}>
              <LabelAndInput labelStyle={`dark-blue`} name={`email`}
                             placeholder={`Enter your email`}
                             customClassNames={`w-full`} label={`Email`}
                             inputType={`email`} required />

              <LabelAndInput minLength={2} maxLength={100} labelStyle={`dark-blue`} name={`initials`}
                             placeholder={`e.g. John Doe`}
                             customClassNames={`w-full`} label={`Initials`}
                             inputType={`text`} required />

              <PasswordInput required icon={`eye`} label={`Password`} inputName={`password`}
                             placeholder={`Enter your password`} />

              <PasswordInput required icon={`password`} label={`Confirm Password`} inputName={`confirmPassword`}
                             placeholder={`Confirm your password`} />

              <SelectAndTooltip tooltip={{
                customPosition: `-top-52 right-5`,
                content: `By default, sign in with your password. Opt for a 6-digit code to skip the password—just confirm via email. Enable 2FA for extra security, requiring both your password and a 6-digit code at login.`
              }} label={`Authentication Method`} select={{
                required: true,
                name: `authenticationMethod`,
                id: `authenticationMethod`,
                options: [
                  { value: `password`, label: `Login via Password(Default)` },
                  { value: `code`, label: `Login via 6-digit code` },
                  { value: `2FA`, label: `Login via 2FA(Recommended)` }
                ]
              }} />
            </div>
          </>
        )}
        {registrationStage === 2 && (
          <>
            <div className={`flex flex-col gap-4 mb-12`}>
              <LabelAndInput minLength={6} maxLength={6} labelStyle={`dark-blue`} name={`code`}
                             placeholder={`Enter 6 digit code sent to ${userData?.email}`}
                             customClassNames={`w-full`} label={`6-digit Code`}
                             inputType={`text`} required />

            </div>
          </>
        )}
        <div className={`flex flex-col justify-center text-center gap-9 mb-3`}>
          <BtnFullScreen type={`submit`} label={registrationStage === 1 ? `Register` : `Verify Email`} size={`lg`} />
        </div>

        <div className={`flex mb-4`}>
          <ButtonSmall onClick={handleOnLinkClick} mode={`button`} type={`button`}
                       label={registrationStage === 1 ? `Already registered an account?` : `Go Back`} />
        </div>

      </form>
    </>
  );
}
