// 'use client';

/*type MyWishlistType = {
  // children: ReactNode;
}*/

import AccountDetails from '@/components/AccountSettings/AccountDetails';

export default function MyWishlist(/*{  }: MyWishlistType*/) {
  return (
    <>
      <AccountDetails cards={{
        btnLink: {
          href: `/properties/1`,
          label: `See Details`
        },
        btnSecondary: {
          label: `Delete`,
          visible: true
        }
      }} heading={`My Wishlist`} searchPlaceholder={`Search your wishlist!`} />
    </>
  );
}
