import { useQuery } from '@apollo/client';
import { GET_PROPERTIES } from '@/graphql/properties';
import client from '@/lib/apolloClient';

export const useFetchProperties = () => {
  const { loading, error, data } = useQuery(GET_PROPERTIES, {
    client
  });

  return { loading, error, data };
};