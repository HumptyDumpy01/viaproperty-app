// 'use client';

import UserData from '@/components/UI/User/UserData';
import Button from '@/components/UI/Button/Button';
import { useUserDataOnClient } from '@/hooks/queries/useUserDataOnClient';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type AboutLandlordType = {
  abbrInitials: string;
  online: boolean;
  initials: string;
  text: string;
  landlordId: string;
  propertyId: string;
  // children: ReactNode;
}

export default function
  AboutLandlord({
                  abbrInitials,
                  online,
                  initials,
                  text,
                  landlordId,
                  propertyId
                }: AboutLandlordType) {
  const { userData, loading: loadingUser } = useUserDataOnClient();
  const [showEditBtn, setEditBtn] = useState<boolean | null>(null);

  useEffect(() => {
    if (userData) {
      if (userData.id === landlordId) {
        setEditBtn(() => true);
      } else {
        setEditBtn(() => false);
      }
    }
  }, [userData, loadingUser, landlordId]);

  function createChat() {
  }

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
          {!showEditBtn && (
            <Button onClick={createChat} mode={`md`} label={`Chat`} />
          )}
          {showEditBtn && (
            <Link target={`_blank`} href={`/account-settings/edit-property-advert/${propertyId}`}>
              <Button mode={`md`} label={`Edit Your Advert`} btnVariant={`white`} />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
