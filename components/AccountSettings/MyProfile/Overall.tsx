'use client';

/*type OverallType = {
  // children: ReactNode;
}*/
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import Button from '@/components/UI/Button/Button';
import HighlightText from '@/components/Typography/HighlightText';
import { useState } from 'react';
import ChangePassword from '@/components/AccountSettings/MyProfile/ChangePassword/ChangePassword';

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
          <p className={`leading-relaxed text-sm text-zinc-900
                  `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <HighlightText text={`sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua`} />. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut
            aliquip ex ea commodo consequat. </p>
        </div>
        <div className={`flex justify-center flex-col gap-5`}>
          <Button btnVariant={`red`} mode={`lg`} label={`Save Changes`} />
          <Button type={`button`} btnVariant={`black`} mode={`lg`} label={`Cancel`} />
        </div>
      </form>
    </>
  );
}
