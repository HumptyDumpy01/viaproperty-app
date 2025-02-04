// 'use client';

/*type MyPurchasesType = {
  // children: ReactNode;
}*/

import AccountDetails from '@/components/AccountSettings/Settings/AccountDetails';

export default function MyPurchases(/*{  }: MyPurchasesType*/) {
  return (
    <>
      <AccountDetails itemType={`purchase`} cardItems={[]} cards={{
        btnLink: {
          label: `Purchase Details`
        },
        btnSecondary: {
          label: `Request Refund`,
          visible: true
        }
      }} heading={`My Purchases`} searchPlaceholder={`Title, Country, Street`} />
    </>
  );
}
