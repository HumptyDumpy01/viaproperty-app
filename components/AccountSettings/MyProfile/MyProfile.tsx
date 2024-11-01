'use client';

/*type MyProfileType = {
  // children: ReactNode;
}*/

import UserData from '@/components/UI/User/UserData';
import ButtonActive from '@/components/UI/Button/ButtonActive';
import { useState } from 'react';
import { ActiveProfilePageType } from '@/components/AccountSettings/AccountSettings';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';

export default function MyProfile(/*{  }: MyProfileType*/) {
  const [activeProfilePage, setActiveProfilePage] = useState<ActiveProfilePageType>(`overall`);

  return (
    <>
      <div>
        <div className={`mb-8`}>
          <UserData paragraph={`tuznikolas@gmail.com`} initials={`Nikolas Baker`} abbrInitials={`N.B`}
                    online={true} />
        </div>
        <div className={`flex gap-2 items-center mb-8`}>
          <ButtonActive color={`red`} size={`small`} onClick={() => setActiveProfilePage('overall')}
                        active={activeProfilePage === 'overall'}
                        label={`Overall`} />
          <ButtonActive color={`red`} size={`small`} onClick={() => setActiveProfilePage('security')}
                        active={activeProfilePage === 'security'}
                        label={`Security`} />
        </div>
        <div className={`flex flex-col`}>
          {activeProfilePage === `overall` && (
            <>
              <div className={`flex flex-col gap-4`}>
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
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
