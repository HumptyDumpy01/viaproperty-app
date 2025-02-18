// 'use client';

/*type SecurityType = {
  // children: ReactNode;
}*/

import Paragraph from '@/components/Typography/Paragraph';
import SelectAndTooltip from '@/components/UI/Select/SelectAndTooltip';
import LoadingScreen from '@/components/Layout/Loading/LoadingScreen';
import { Dispatch, SetStateAction, SyntheticEvent, useRef, useState } from 'react';
import { changeAuthMethodSchema } from '@/utils/schemas/auth/changeAuthMethodSchema';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import SnackbarMUI from '@/components/UI/Snackbar/SnackbarMUI';
import { SnackbarDataType } from '@/components/PropertyDescription/Layout/PropertyTags';
import BackdropMUI from '@/components/UI/Backdrop/BackdropMUI';
import { useChangeUserAuthMethod } from '@/hooks/mutations/useChangeUserAuthMethod';

export type AuthMethodType = `code` | `password` | `2FA` | `google-provider`;

export type OptionsSelectType = {
  value: string;
  label: string;
}
type SecurityType = {
  data: any;
  loading: boolean;
  currentAuthMethod: AuthMethodType;
  setCurrentAuthMethod: Dispatch<SetStateAction<AuthMethodType>>;
}
export default function Security({ loading, currentAuthMethod, setCurrentAuthMethod }: SecurityType) {
  const { updateUserAuthMethod } = useChangeUserAuthMethod();

  const [errorMessage, setErrorMessage] = useState(``);

  const [backdropOpen, setBackdropOpen] = useState(false);
  const [disableSelect, setDisableSelect] = useState(false);
  const disableAuthSelectTimer = useRef<NodeJS.Timeout>();

  const [snackbarConfig, setSnackbarConfig] = useState<SnackbarDataType>({
    message: ``,
    severity: `success`
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);


  if (loading) {
    return <LoadingScreen />;
  }

  function handleSnackbarState(authMethod: string) {
    setDisableSelect(() => true);
    setSnackbarConfig({
      message: `Your authentication method is now "${authMethod}".`,
      severity: `success`
    });
    setSnackbarOpen(() => true);

    disableAuthSelectTimer.current = setTimeout(function() {
      setSnackbarOpen(() => false);
      setDisableSelect(() => false);
    }, 4_000);

  }

  async function handleOnSelect(e: SyntheticEvent<HTMLSelectElement, Event>) {
    const selectedValue = e.currentTarget.value as AuthMethodType;

    const validate = changeAuthMethodSchema.safeParse({ selectedAuthMethod: selectedValue });

    if (!validate.success) {
      setErrorMessage(() => validate.error.errors[0].message);
      return;
    }
    if (selectedValue === currentAuthMethod) {
      return;
    }
    setBackdropOpen(() => true);
    setErrorMessage(() => ``);

    const response = await updateUserAuthMethod({ authMethod: selectedValue });

    if (response?.data?.message) {
      setBackdropOpen(() => false);
      setErrorMessage(response?.data?.message);
      return;
    }
    setCurrentAuthMethod(() => response.data.changeUserAuthMethod?.authMethod);
    setBackdropOpen(() => false);

    handleSnackbarState(selectedValue);

  }

  return (
    <>
      <SnackbarMUI severity={snackbarConfig.severity} message={snackbarConfig.message}
                   state={{ open: snackbarOpen, setOpen: setSnackbarOpen }} />
      <BackdropMUI state={{ open: backdropOpen, setOpen: setBackdropOpen }}
                   alertMessage={`Please wait until we update your authentication method..`} />

      <Paragraph customClasses={`mb-14 max-w-screen-md`} text={(
        <>
          Choose how you want to secure your account. You can log in using a password, a 6-digit verification code, or
          enable two-factor authentication (2FA) for an extra layer of security. Stay in control of your account&#39;s
          protection.
        </>
      )} />

      {errorMessage && (
        <div className={`mb-3`}>
          <ErrorMessage errorMessage={errorMessage} />
        </div>
      )}
      <form className={`flex flex-col justify-center max-w-[422px] gap-12`}>
        {currentAuthMethod !== `google-provider` && (

          <SelectAndTooltip
            disabled={disableSelect}
            onChange={handleOnSelect}
            defaultValue={currentAuthMethod}
            tooltip={{
              customPosition: `-top-52 right-5 hidden`,
              content: `By default, sign in with your password. Opt for a 6-digit code to skip the password—just confirm via email. Enable 2FA for extra security, requiring both your password and a 6-digit code at login.`
            }} label={`Authentication Method`} select={{
            required: true,
            name: `authMethod`,
            id: `authMethod`,
            options: [
              { value: `password`, label: `Login via Password(Default)` },
              { value: `code`, label: `Login via 6-digit code` },
              { value: `2FA`, label: `Login via 2FA(Recommended)` }
            ]
          }} />
        )}
      </form>
    </>
  );
}
