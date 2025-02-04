'use client';

/*type MyAdvertsType = {
  // children: ReactNode;
}*/

import AccountDetails from '@/components/AccountSettings/Settings/AccountDetails';
import { useState } from 'react';

export type ActiveFilterType = `All` | `Rent` | `Sell`;

export default function MyAdverts(/*{  }: MyAdvertsType*/) {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <AccountDetails
      skipAmount={0}
      onPageChange={() => {
      }}
      currentPageState={{ value: currentPage, setValue: setCurrentPage }}
      totalItems={0} itemType={`advert`} cardItems={[]} cards={{
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
