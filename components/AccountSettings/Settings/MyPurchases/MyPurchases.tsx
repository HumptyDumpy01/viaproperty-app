'use client';

/*type MyPurchasesType = {
  // children: ReactNode;
}*/

import AccountDetails from '@/components/AccountSettings/Settings/AccountDetails';
import { useState } from 'react';

export default function MyPurchases(/*{  }: MyPurchasesType*/) {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <AccountDetails
        handleSortItems={() => {
        }}
        skippedItems={0}
        onPageChange={() => {
        }}
        currentPage={currentPage}
        totalItems={0} itemType={`purchase`} cardItems={[]} cards={{
        btnLink: {
          label: `Purchase Details`
        },
        btnSecondary: {
          label: `Request Refund`,
          visible: true,
          onClick: () => {
          }
        }
      }} heading={`My Purchases`} searchPlaceholder={`Title, Country, Street`} />
    </>
  );
}
