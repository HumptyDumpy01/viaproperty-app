'use client';

import AccountDetails, { CardItemsType } from '@/components/AccountSettings/Settings/AccountDetails';
import { useGetResolvedUserWishlist } from '@/hooks/queries/useGetResolvedUserWishlist';
import LoadingScreen from '@/components/Layout/Loading/LoadingScreen';
import { useEffect, useState } from 'react';
import { useRemovePropertyFromUserWishlist } from '@/hooks/mutations/useRemovePropertyFromUserWishlist';

export default function MyWishlist() {
  const itemsPerPage = 4;
  const [showItems, setShowItems] = useState<CardItemsType[]>([]);
  const [errorMessage, setErrorMessage] = useState(``);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [skippedItems, setSkippedItems] = useState(0);

  const [allItems, setAllItems] = useState<CardItemsType[]>();

  const { error, data, loading } = useGetResolvedUserWishlist();
  const { removePropIdFromUserWishlist, loading: loadingRemovePropFromWishlist } = useRemovePropertyFromUserWishlist();

  useEffect(() => {
    if (data) {
      setShowItems(data.getResolvedUserWishlist?.resolvedWishlist?.slice((currentPage - 1) * itemsPerPage, 4));
      setAllItems(data.getResolvedUserWishlist?.resolvedWishlist);
      setTotalItems(() => data.getResolvedUserWishlist?.resolvedWishlist?.length);
    }
    console.log(`executes...`);
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
      setErrorMessage(`Failed to load your wishlist.. Please try again later. ${error}`);
    }
  }, [error]);


  useEffect(() => {
    if (showItems.length === 0 && currentPage > 1) {
      setCurrentPage((prevState) => {
        const newPage = prevState - 1;
        setShowItems(allItems?.slice((newPage - 1) * itemsPerPage, newPage * itemsPerPage) || []);
        return newPage;
      });
    }
  }, [showItems, currentPage, allItems]);

  if (loading) {
    return <LoadingScreen />;
  }

  function onPageChange(pageNumber: number) {
    const allItemsCopy = [...allItems!];
    setCurrentPage(() => pageNumber);
    setShowItems(() => allItemsCopy.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage));
    setSkippedItems(() => (pageNumber - 1) * itemsPerPage);
  }

  function handleWishlistItemDelete(propertyId: string) {
    setTotalItems((prevState) => prevState - 1);
    setAllItems((prevState) => {
      const updatedItems = prevState?.filter((item) => item.id !== propertyId);
      const updatedShowItems = updatedItems?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [];
      setShowItems(updatedShowItems);

      return updatedItems;
    });
  }


  return (
    <>
      <AccountDetails
        skippedItems={skippedItems}
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
            visible: true,
            onClick: handleWishlistItemDelete
          }
        }}
        heading={`My Wishlist`}
        searchPlaceholder={`Search your wishlist!`}
      />
    </>
  );
}