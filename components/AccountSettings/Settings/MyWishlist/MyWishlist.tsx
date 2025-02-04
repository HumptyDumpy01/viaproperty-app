'use client';

import AccountDetails, { CardItemsType } from '@/components/AccountSettings/Settings/AccountDetails';
import { useGetResolvedUserWishlist } from '@/hooks/queries/useGetResolvedUserWishlist';
import LoadingScreen from '@/components/Layout/Loading/LoadingScreen';
import { useEffect, useState } from 'react';

export default function MyWishlist() {
  const itemsPerPage = 4;
  const [skipItems, setSkipItems] = useState(0);
  const [showItems, setShowItems] = useState<CardItemsType[]>([]);
  const [errorMessage, setErrorMessage] = useState(``);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const { error, data, loading } = useGetResolvedUserWishlist({ take: itemsPerPage, skip: skipItems });

  useEffect(() => {
    if (data) {
      setShowItems(data.getResolvedUserWishlist?.resolvedWishlist);
      setTotalItems(data.getResolvedUserWishlist.total);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
      setErrorMessage(`Failed to load your wishlist.. Please try again later. ${error}`);
    }
  }, [error]);

  if (loading) {
    return <LoadingScreen />;
  }

  function onPageChange(pageNumber: number) {
    setSkipItems(() => itemsPerPage * (pageNumber - 1));
    setCurrentPage(() => pageNumber);
  }

  return (
    <>
      <AccountDetails
        skipAmount={skipItems}
        currentPageState={{ value: currentPage, setValue: setCurrentPage }}
        onPageChange={onPageChange}
        totalItems={totalItems}
        errorMessage={errorMessage}
        itemType={`wishlist`}
        cardItems={showItems}
        cards={{
          btnLink: {
            label: `See Details`
          },
          btnSecondary: {
            label: `Delete`,
            visible: true
          }
        }}
        heading={`My Wishlist`}
        searchPlaceholder={`Search your wishlist!`}
      />
    </>
  );
}