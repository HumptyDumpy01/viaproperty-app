import { useQuery } from '@apollo/client';
import { GET_RESOLVED_USER_WISHLIST } from '@/graphql/queries/get-resolved-user-wishlist';
import client from '@/lib/apolloClient';

export const useGetResolvedUserWishlist = () => {
  const { loading, error, data } = useQuery(GET_RESOLVED_USER_WISHLIST, {
    client,
    variables: {}
  });

  return { loading, data, error };
};