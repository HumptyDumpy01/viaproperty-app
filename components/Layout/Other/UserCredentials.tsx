'use client';

import React, { useState } from 'react';
import AppSettingsBadge from '@/components/UI/Badge/AppSettingsBadge';

type UserCredentialsType = {
  initials: string;
  location: string;
  abbrInitials: string;
  // children: ReactNode;
}

export default function UserCredentials({ initials, abbrInitials, location }: UserCredentialsType) {
  const [openAppSettingsPopup, setOpenAppSettingsPopup] = useState<boolean>(false);
  const hiddenPopupStyles = `translate-y-1/2 opacity-0 `;
  return (
    <>
      <div className={`flex items-center gap-2`}>
        <div className={`hidden bp-480:flex flex-col gap-0.5`}>
          <p className={`text-[15px] font-semibold`}>{initials}</p>
          <p className={`text-[11px] font-medium text-zinc-500`}>{location}</p>
        </div>
        <div className={`flex gap-1 relative`}>
          <div className={`flex items-center justify-center w-14 h-14 bg-linear-main-dark-blue rounded-full`}>
            <p className={`font-semibold text-white`}>{abbrInitials}</p>
          </div>
          <div className={`flex items-center cursor-pointer`}
               onClick={() => setOpenAppSettingsPopup(prevState => !prevState)}>
            <svg className={`${openAppSettingsPopup ? `rotate-180` : ``} transition-all duration-300`}
                 xmlns="http://www.w3.org/2000/svg" width="19"
                 height="20" viewBox="0 0 17 18" fill="none">
              <path
                d="M3.94735 11.3751C4.21641 11.6442 4.65257 11.6444 4.92192 11.3757L7.96637 8.33785C8.23552 8.06929 8.67127 8.06929 8.94041 8.33785L11.9849 11.3757C12.2542 11.6444 12.6904 11.6442 12.9594 11.3751L13.2195 11.1151C13.4887 10.8458 13.4887 10.4093 13.2195 10.14L8.94095 5.86148C8.67168 5.59222 8.23511 5.59222 7.96584 5.86148L3.68732 10.14C3.41805 10.4093 3.41805 10.8458 3.68732 11.1151L3.94735 11.3751Z"
                fill="#00202A" />
            </svg>
          </div>
          <div className={`bg-white py-5 px-6 absolute top-0 right-4 border border-zinc-200 rounded-2xl flex flex-col
          gap-4 z-50 min-w-64 transition-all duration-200 ${!openAppSettingsPopup ? hiddenPopupStyles : ``}`}>
            <AppSettingsBadge links={[
              {
                componentType: `button`,
                active: true,
                label: `USD`
              },
              {
                componentType: `button`,
                active: false,
                label: `GRN`
              },
              {
                componentType: `button`,
                active: false,
                label: `EUR`
              }
            ]} icon={`currency`} />

            <AppSettingsBadge links={[
              {
                componentType: `button`,
                active: true,
                label: `EN`
              },
              {
                componentType: `button`,
                active: false,
                label: `UKR`
              },
              {
                componentType: `button`,
                active: false,
                label: `FR`
              }
            ]} icon={`language`} />
            <AppSettingsBadge links={[
              {
                componentType: `link`,
                active: true,
                label: `Account Activities`,
                underline: false,
                href: `/account-settings?page=account-settings&subpage=my-profile`
              }
            ]} icon={`settings`} />

            <AppSettingsBadge links={[
              {
                componentType: `button`,
                active: true,
                underline: false,
                label: `Logout`
              }
            ]} icon={`logout`} />

          </div>

        </div>
      </div>
    </>
  );
}
