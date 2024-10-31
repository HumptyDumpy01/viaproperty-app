// 'use client';

import { AuthPageType } from '@/app/auth/page';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import PasswordInput from '@/components/UI/Input/PasswordInput';
import ButtonSmall from '@/components/UI/Button/ButtonSmall';
import BtnFullScreen from '@/components/UI/Button/BtnFullScreen';
import SelectAndTooltip from '@/components/UI/Select/SelectAndTooltip';

type RegisterFormType = {
  setActivePage: (page: AuthPageType) => void;
  // children: ReactNode;
}

export default function RegisterForm({ setActivePage }: RegisterFormType) {
  return (
    <>
      <form className={`w-full`}>
        <div className={`flex flex-col gap-4 mb-12`}>
          <LabelAndInput labelStyle={`dark-blue`} name={`email`} placeholder={`Enter your email`}
                         customClassNames={`w-full`} label={`Email`}
                         inputType={`email`} required />

          <LabelAndInput labelStyle={`dark-blue`} name={`initials`} placeholder={`e.g. John Doe`}
                         customClassNames={`w-full`} label={`Initials`}
                         inputType={`text`} required />

          <PasswordInput required icon={`eye`} label={`Password`} inputName={`password`}
                         placeholder={`Enter your password`} />

          <PasswordInput required icon={`password`} label={`Confirm Password`} inputName={`confirmPassword`}
                         placeholder={`Confirm your password`} />

          <SelectAndTooltip tooltip={{
            customPosition: `-top-52 right-5`,
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet cum dolorem harum suscipit! Culpa, eligendi.`
          }} label={`Authentication Method`} select={{
            required: true,
            name: `authMethod`,
            id: `authMethod`,
            options: [
              { value: `password`, label: `Login via Password(Default)` },
              { value: `6-digit-code`, label: `Login via 6-digit code` },
              { value: `2FA`, label: `Login via 2FA(Recommended)` }
            ]
          }} />
        </div>
        {/*
        <div className={`mb-12`}>
          <Checkbox checked label={`Enable Two-Factor Authentication(Recommended)`} name={`2FA`} />
        </div>*/}

        <div className={`flex flex-col justify-center text-center gap-9 mb-3`}>
          <BtnFullScreen type={`submit`} label={`Register`} size={`lg`} />
        </div>

        <div className={`flex mb-4`}>
          <ButtonSmall label={`Already registered an account?`} onClick={() => setActivePage(`login`)} />
        </div>

      </form>
    </>
  );
}
