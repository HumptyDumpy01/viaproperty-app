// 'use client';

/*type MyWishlistType = {
  // children: ReactNode;
}*/

import AccountDetails from '@/components/AccountSettings/Settings/AccountDetails';

export default function MyWishlist(/*{  }: MyWishlistType*/) {

  return (
    <>
      <AccountDetails itemType={`wishlist`} cardItems={[]} cards={{
        btnLink: {
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
