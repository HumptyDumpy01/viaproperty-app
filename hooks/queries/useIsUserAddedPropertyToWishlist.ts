import { useQuery } from '@apollo/client';
import { IS_ADDED_TO_WISHLIST } from '@/graphql/queries/is-added-to-wishlist';
import client from '@/lib/apolloClient';

export const useIsUserAddedPropertyToWishlist = (propertyId: string) => {
  const { loading, error, data } = useQuery(IS_ADDED_TO_WISHLIST, {
    client,
    variables: { propertyId }
  });

  return { loading, error, data };

};