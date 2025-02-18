// 'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import Button from '@/components/UI/Button/Button';
import ChangePassword from '@/components/AccountSettings/Settings/MyProfile/ChangePassword/ChangePassword';
import { useChangeUserInitials } from '@/hooks/mutations/useChangeUserInitials';
import { setAccessTokenCookie } from '@/utils/functions/setAccessTokenCookie';
import { useCartDispatch } from '@/store/hooks';
import { navigationSliceActions } from '@/store/features/navigation';
import SnackbarMUI, { SnackBarSeverityType } from '@/components/UI/Snackbar/SnackbarMUI';
import { SnackbarDataType } from '@/components/PropertyDescription/Layout/PropertyTags';
import { changeUserInitialsSchema } from '@/utils/schemas/auth/changeUserInitialsSchema';
import BackdropMUI from '@/components/UI/Backdrop/BackdropMUI';
import { scrollIntoViewFunc } from '@/utils/functions/scrollIntoViewFunc';
import { AuthMethodType } from '@/components/AccountSettings/Settings/MyProfile/Security';
import TextualTooltip from '@/components/Layout/Tooltip/TextualTooltip';

type OverallType = {
  userInitials: string;
  userEmail: string;
  authMethod: AuthMethodType;
  // children: ReactNode;
}

type UpdateUserInitialsResponseType = {
  accessToken: string;
  updatedInitials: string;
}

export default function Overall({ userEmail, userInitials, authMethod }: OverallType) {
  const [backdropMUIState, setBackdropMUIState] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [currentUserInitials, setCurrentUserInitials] = useState(userInitials);
  const snackbarTimer = useRef<NodeJS.Timer>();

  const { updateUserInitials, loading } = useChangeUserInitials();
  const [enableButtons, setEnableButtons] = useState(false);

  const [enteredUserInitials, setEnteredUserInitials] = useState(userInitials);

  const dispatch = useCartDispatch();

  const [snackbarData, setSnackbarData] = useState<SnackbarDataType>({
    message: ``,
    severity: `info`
  });

  useEffect(() => {
    if (userInitials !== enteredUserInitials.trim()) {
      setEnableButtons(() => true);
    } else {
      setEnableButtons(() => false);
    }

  }, [enteredUserInitials, userInitials]);


  function toggleSnackbar(severity: SnackBarSeverityType, message: string) {
    setSnackbarOpen(() => true);
    setSnackbarData({ severity, message });

    snackbarTimer.current = setTimeout(function() {
      setSnackbarOpen(() => false);
    }, 5_000);
  }

  async function handleChangeUserInitials(event: FormEvent) {
    event.preventDefault();

    const validate = changeUserInitialsSchema.safeParse({ enteredUserInitials });

    if (!validate.success) {
      toggleSnackbar(`warning`, validate.error.errors[0].message);
      return;
    }

    try {
      setBackdropMUIState(() => true);
      const response = await updateUserInitials(enteredUserInitials).then((res) =>
        res!.data.changeUserInitials) as UpdateUserInitialsResponseType;

      if (response.updatedInitials) {
        setBackdropMUIState(() => false);
        setCurrentUserInitials(response.updatedInitials);
        setAccessTokenCookie(response.accessToken);
        dispatch(navigationSliceActions.updateUserInitials(response.updatedInitials));
      }
      setEnableButtons(() => false);
      toggleSnackbar(`success`, `The initials are changed successfully to ${enteredUserInitials}`);

    } catch (e) {
      setBackdropMUIState(() => false);
      toggleSnackbar(`error`, `Failed to update user initials. Please try again later.`);
    }
  }

  function handleOnCancel() {
    setEnableButtons(() => false);
    setCurrentUserInitials(() => userInitials);
    setEnteredUserInitials(() => userInitials);
    scrollIntoViewFunc(`.profile-container`);
  }

  return (
    <>
      <BackdropMUI state={{ open: backdropMUIState, setOpen: setBackdropMUIState }}
                   alertMessage={`Updating the data, please wait..`}
                   circularColor={`success`} />
      <SnackbarMUI severity={snackbarData.severity} message={snackbarData.message}
                   state={{ setOpen: setSnackbarOpen, open: snackbarOpen }} />
      <form onSubmit={handleChangeUserInitials} className={`flex flex-col gap-4`}>
        <div className={`max-w-[422px] flex flex-col`}>
          <LabelAndInput
            disabled={loading}
            value={enteredUserInitials}
            onChangeState={{ setValueEntered: setEnteredUserInitials, valueEntered: enteredUserInitials }}
            defaultValue={currentUserInitials} labelSize={`text-xl`} labelStyle={`dark-blue`}
            name={`initials`}
            placeholder={`e.g. John Doe`}
            customClassNames={`text-sm disabled:animate-pulse`} label={`Initials`} required={true}
            inputType={`text`} />
        </div>

        <div className={`max-w-[422px] flex flex-col`}>
          <LabelAndInput
            showDisabledLabel
            disabled={true} defaultValue={userEmail} labelSize={`text-xl`}
            labelStyle={`dark-blue`}
            name={`email`}
            placeholder={`Your email`}
            customClassNames={`text-sm`} label={`Email`}
            inputType={`text`} />
        </div>

        <div className={`max-w-[422px] flex flex-col`}>
          <LabelAndInput
            type={`textarea`}
            defaultValue={`Your bio`}
            labelSize={`text-xl`}
            labelStyle={`dark-blue`}
            name={`bio`}
            placeholder={`Your bio`}
            customClassNames={`text-sm`} label={`Biography`}
            inputType={`text`} />
        </div>

        {authMethod !== `google-provider` && (
          <ChangePassword userEmail={userEmail} />
        )}

        <div className={`mb-10`}>
          {authMethod !== `google-provider` && (
            <>
              <p className={`leading-relaxed text-sm text-zinc-900 max-w-screen-md
                  `}>
                Secure your account by updating your password. Click the button to set a new password and enhance your
                account&#39;s protection.
              </p>
            </>
          )}

          {authMethod === `google-provider` && (
            <>
              <p className={`leading-relaxed text-sm text-zinc-900 max-w-screen-md
                  `}>
                <TextualTooltip text={`You account was registered by using Provider. You cannot change or set your password, nor change
                the authentication method.`} />
              </p>
            </>
          )}
        </div>

        {enableButtons && (
          <div className={`flex justify-center flex-col gap-5`}>
            <Button customClasses={`disabled:animate-pulse`} disabled={loading}
                    btnVariant={`red`} mode={`lg`}
                    label={`Save Changes`} />
            <Button onClick={handleOnCancel} customClasses={`disabled:animate-pulse`} disabled={loading} type={`button`}
                    btnVariant={`black`}
                    mode={`lg`} label={`Cancel`} />
          </div>
        )}
      </form>
    </>
  );
}
