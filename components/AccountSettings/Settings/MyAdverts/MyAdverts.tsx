// 'use client';

/*type MyAdvertsType = {
  // children: ReactNode;
}*/

import AccountDetails from '@/components/AccountSettings/Settings/AccountDetails';

export type ActiveFilterType = `All` | `Rent` | `Sell`;

export default function MyAdverts(/*{  }: MyAdvertsType*/) {
  return (
    <AccountDetails itemType={`advert`} cardItems={[]} cards={{
      btnLink: {
        label: `Edit`
      },
      btnSecondary: {
        label: `Delete Advert`,
        visible: true
      }
    }} heading={`My Adverts`} searchPlaceholder={`Title, Country, Street`} />
  );
}
