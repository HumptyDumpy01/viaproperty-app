// 'use client';

import { ViapropertyIconType } from '@/utils/types/ViapropertyIconType';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import React from 'react';

type ContactDetailsType = {
  contacts: { icon: ViapropertyIconType, label: string }[]
  // children: ReactNode;
}

export default function ContactDetails({ contacts }: ContactDetailsType) {
  return (
    <>
      <div className={`flex flex-col gap-3`}>
        {contacts.map(function(detail) {
          return (
            <>
              <div className={`flex gap-4 items-center`}>
                <ViapropertyIcon icon={detail.icon} />
                <span
                  className={`inline-block text-xl text-zinc-800 bg-clip-text text-transparent bg-linear-main-red font-semibold`}>{detail.label}</span>
              </div>
            </>
          );
        })}

      </div>
    </>
  );
}
