import { useMutation } from '@apollo/client';
import { ADD_PROPERTY_TO_USER_WISHLIST } from '@/graphql/mutations/add-property-id-to-user-wishlist';

export const useAddPropertyToUserWishlist = () => {
  const [addPropertyIdToUserWishlist, { loading, error, data }] = useMutation(ADD_PROPERTY_TO_USER_WISHLIST);

  const addPropertyToUserWishlist = async (propertyId: string) => {
    try {
      const response = await addPropertyIdToUserWishlist({ variables: { propertyId } });
      return response;
    } catch (e) {
      console.error(e);
    }
  };

  return {
    addPropertyToUserWishlist,
    loading,
    data,
    error
  };

};
