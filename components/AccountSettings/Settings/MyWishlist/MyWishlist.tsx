'use client';

import AccountDetails, { CardItemsType } from '@/components/AccountSettings/Settings/AccountDetails';
import { useGetResolvedUserWishlist } from '@/hooks/queries/useGetResolvedUserWishlist';
import LoadingScreen from '@/components/Layout/Loading/LoadingScreen';
import { useEffect, useState } from 'react';
import { useRemovePropertyFromUserWishlist } from '@/hooks/mutations/useRemovePropertyFromUserWishlist';
import { ActiveFilterType } from '@/components/AccountSettings/Settings/MyAdverts/MyAdverts';

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
      const sortedItemsByNewest = [...(data.getResolvedUserWishlist?.resolvedWishlist || [])]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      setShowItems(sortedItemsByNewest?.slice((currentPage - 1) * itemsPerPage, 4));
      setAllItems(sortedItemsByNewest);
      setTotalItems(() => data.getResolvedUserWishlist?.resolvedWishlist?.length);
    }

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

  async function handleWishlistItemDelete(propertyId: string) {
    setTotalItems((prevState) => prevState - 1);
    setAllItems((prevState) => {
      const updatedItems = prevState?.filter((item) => item.id !== propertyId);
      const updatedShowItems = updatedItems?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [];
      setShowItems(updatedShowItems);

      return updatedItems;
    });
    await removePropIdFromUserWishlist(propertyId);
  }

  function handleSortWishlistItems(param = `Sort By Newest`, sortByPropertyType: ActiveFilterType) {
    onPageChange(1);

    const sortedItems = [...(allItems || [])];

    switch (param) {
      case `Sort by Oldest`:
        sortedItems.sort((a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case `Sort by Newest`:
        sortedItems.sort((a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
    }

    switch (sortByPropertyType) {
      case 'Default':
        setAllItems(data.getResolvedUserWishlist?.resolvedWishlist);
        setShowItems(data.getResolvedUserWishlist?.resolvedWishlist.slice(0, itemsPerPage));
        break;
      case 'Rent First':
        sortedItems.sort((a, b) => {
          if (a.propertyFor === 'rent' && b.propertyFor === 'sell') {
            return -1;
          } else if (a.propertyFor === 'sell' && b.propertyFor === 'rent') {
            return 1;
          } else {
            return 0;
          }
        });

        setAllItems(sortedItems);
        setShowItems(sortedItems.slice(0, itemsPerPage));
        break;
      case 'Sell First':
        sortedItems.sort((a, b) => {
          if (a.propertyFor === 'sell' && b.propertyFor === 'rent') {
            return -1;
          } else if (a.propertyFor === 'rent' && b.propertyFor === 'sell') {
            return 1;
          } else {
            return 0;
          }
        });

        setAllItems(sortedItems);
        setShowItems(sortedItems.slice(0, itemsPerPage));
    }

  }

  return (
    <>
      <AccountDetails
        handleSortItems={handleSortWishlistItems}
        skippedItems={skippedItems}
        currentPage={currentPage}
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