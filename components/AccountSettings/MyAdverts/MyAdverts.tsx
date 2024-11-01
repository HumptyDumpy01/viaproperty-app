// 'use client';

/*type MyAdvertsType = {
  // children: ReactNode;
}*/

import AccountDetails from '@/components/AccountSettings/AccountDetails';

export type ActiveFilterType = `all` | `rent` | `sell`;

export default function MyAdverts(/*{  }: MyAdvertsType*/) {
  return (
    <AccountDetails cards={{
      btnLink: {
        href: `/account-settings/1/edit`,
        label: `Edit`
      },
      btnSecondary: {
        label: `Delete Advert`,
        visible: true
      }
    }} heading={`My Adverts`} searchPlaceholder={`Title, Country, Street`} />
  );
}
