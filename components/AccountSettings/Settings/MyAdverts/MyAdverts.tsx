'use client';

/*type MyAdvertsType = {
  // children: ReactNode;
}*/

import AccountDetails from '@/components/AccountSettings/Settings/AccountDetails';
import { useState } from 'react';

export type ActiveFilterType = `Default` | `Rent First` | `Sell First`;

export default function MyAdverts(/*{  }: MyAdvertsType*/) {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <AccountDetails
      handleSortItems={() => {
      }}
      skippedItems={0}
      onPageChange={() => {
      }}
      currentPage={currentPage}
      totalItems={0} itemType={`advert`} cardItems={[]} cards={{
      btnLink: {
        label: `Edit`
      },
      btnSecondary: {
        label: `Delete Advert`,
        visible: true,
        onClick: () => {
        }
      }
    }} heading={`My Adverts`} searchPlaceholder={`Title, Country, Street`} />
  );
}
