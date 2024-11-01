// 'use client';

/*type MyPurchasesType = {
  // children: ReactNode;
}*/

import AccountDetails from '@/components/AccountSettings/AccountDetails';

export default function MyPurchases(/*{  }: MyPurchasesType*/) {
  return (
    <>
      <AccountDetails cards={{
        btnLink: {
          href: `/account-settings/purchases/1`,
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
