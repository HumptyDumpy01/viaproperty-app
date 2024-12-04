// 'use client';

import UserData from '@/components/UI/User/UserData';
import Button from '@/components/UI/Button/Button';

type AboutLandlordType = {
  abbrInitials: string;
  online: boolean;
  initials: string;
  text: string;
  // children: ReactNode;
}

export default function AboutLandlord({ abbrInitials, online, initials, text }: AboutLandlordType) {
  return (
    <>
      <div className={`flex flex-col gap-6 mb-16`}>
        <UserData online={online} initials={initials} abbrInitials={abbrInitials} paragraph={`Landlord`} />
        {text.length > 0 && (
          <>
            <p className={`leading-relaxed text-sm mb-7`}>{text}</p>
          </>
        )}

        <div className={`flex gap-6`}>
          <Button mode={`md`} label={`Chat`} />
          <Button mode={`md`} label={`Call`} btnVariant={`white`} />
        </div>
      </div>
    </>
  );
}
