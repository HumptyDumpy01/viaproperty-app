// 'use client';

/*type OverallType = {
  // children: ReactNode;
}*/
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import Button from '@/components/UI/Button/Button';
import ChangePassword from '@/components/AccountSettings/Settings/MyProfile/ChangePassword/ChangePassword';

export default function Overall(/*{  }: OverallType*/) {
  return (
    <>
      <form className={`flex flex-col gap-4`}>
        <div className={`max-w-[422px] flex flex-col`}>
          <LabelAndInput defaultValue={`Nikolas Baker`} labelSize={`text-xl`} labelStyle={`dark-blue`}
                         name={`initials`}
                         placeholder={`e.g. John Doe`}
                         customClassNames={`text-sm`} label={`Initials`} required={true}
                         inputType={`text`} />
        </div>

        <div className={`max-w-[422px] flex flex-col`}>
          <LabelAndInput
            disabled={true} defaultValue={`tuznikolas@gmail.com`} labelSize={`text-xl`}
            labelStyle={`dark-blue`}
            name={`email`}
            placeholder={`Your email`}
            customClassNames={`text-sm`} label={`Email`}
            inputType={`text`} />
        </div>

        <ChangePassword />

        <div className={`mb-10`}>
          <p className={`leading-relaxed text-sm text-zinc-900 max-w-screen-md
                  `}>
            Secure your account by updating your password. Click the button to set a new password and enhance your
            account&#39;s protection.
          </p>
        </div>
        <div className={`flex justify-center flex-col gap-5`}>
          <Button btnVariant={`red`} mode={`lg`} label={`Save Changes`} />
          <Button type={`button`} btnVariant={`black`} mode={`lg`} label={`Cancel`} />
        </div>
      </form>
    </>
  );
}
