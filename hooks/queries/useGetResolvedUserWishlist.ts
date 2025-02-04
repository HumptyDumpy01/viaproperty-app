import { useQuery } from '@apollo/client';
import {
  GET_RESOLVED_USER_WISHLIST,
  GetResolvedUserWishlistInputType
} from '@/graphql/queries/get-resolved-user-wishlist';
import client from '@/lib/apolloClient';

export const useGetResolvedUserWishlist = (getResolvedUserWishlistInput: GetResolvedUserWishlistInputType) => {
  const { loading, error, data } = useQuery(GET_RESOLVED_USER_WISHLIST, {
    client,
    variables: { getResolvedUserWishlistInput }
  });

  return { loading, data, error };
};