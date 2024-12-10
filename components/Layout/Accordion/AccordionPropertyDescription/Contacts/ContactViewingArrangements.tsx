// Define the ViapropertyIconType
type ViapropertyIconType = 'user' | 'phone' | `email`;

// Update the ContactDetails component to use the correct type
import ContactDetails from '@/components/Layout/Accordion/AccordionPropertyDescription/Contacts/ContactDetails';
import React from 'react';

type ContactViewingArrangementsType = {
  text: string;
  contacts: { initials: string, phones: string[], email: string }[];
  // children: ReactNode;
}

export default function ContactViewingArrangements({ text, contacts }: ContactViewingArrangementsType) {
  return (
    <>
      <div>
        <p className={`text-sm leading-relaxed mb-6`}> {text}</p>
        <div className={`flex gap-16 flex-wrap`}>
          {contacts.map((contact, index) => {
            const contactDetails = [
              { icon: 'user' as ViapropertyIconType, label: contact.initials },
              { icon: 'email' as ViapropertyIconType, label: contact.email },
              ...contact.phones.map((phone) => ({ icon: 'phone' as ViapropertyIconType, label: phone }))
            ];
            return <ContactDetails key={index} contacts={contactDetails} />;
          })}
        </div>
      </div>
    </>
  );
}