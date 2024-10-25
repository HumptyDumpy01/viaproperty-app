// 'use client';

import ContactDetails from '@/components/Layout/Accordion/AccordionPropertyDescription/Contacts/ContactDetails';
import React from 'react';

type ContactViewingArrangementsType = {
  text: string;
  // children: ReactNode;
}

export default function ContactViewingArrangements({ text }: ContactViewingArrangementsType) {
  return (
    <>
      <div>
        <p className={`text-sm leading-relaxed mb-6`}> {text}</p>
        <div className={`flex gap-16`}>
          <ContactDetails
            contacts={[{ icon: `user`, label: `Nikolas Baker` }, { icon: `phone`, label: `+380394879388` }]} />

          <ContactDetails
            contacts={[{ icon: `user`, label: `Mary Baker` }, { icon: `phone`, label: `+38093489344` }]} />
        </div>
      </div>
    </>
  );
}
