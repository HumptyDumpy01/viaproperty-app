import { useQuery } from '@apollo/client';
import { GET_USER_AUTH_METHOD } from '@/graphql/queries/get-user-auth-method';
import client from '@/lib/apolloClient';

export const useGetUserAuthMethod = () => {
  const { loading, error, data } = useQuery(GET_USER_AUTH_METHOD, {
    client,
    variables: {}
  });

  return { loading, error, data };
};
