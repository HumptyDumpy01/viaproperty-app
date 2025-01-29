import { useMutation } from '@apollo/client';
import { REMOVE_PROPERTY_FROM_WISHLIST } from '@/graphql/mutations/remove-property-from-wishlist';

export const useRemovePropertyFromUserWishlist = () => {
  const [removePropertyIdFromUserWishlist, { loading, error, data }] = useMutation(REMOVE_PROPERTY_FROM_WISHLIST);

  const removePropIdFromUserWishlist = async (propertyId: string) => {
    try {
      const remainingWishlist = await removePropertyIdFromUserWishlist({ variables: { propertyId } });
      return remainingWishlist;
    } catch (e) {
      console.error(e);
    }
  };

  return {
    removePropIdFromUserWishlist,
    loading,
    data,
    error
  };

};