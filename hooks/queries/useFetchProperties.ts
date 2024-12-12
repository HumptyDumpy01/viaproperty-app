import { useQuery } from '@apollo/client';
import { GET_PROPERTIES } from '@/graphql/queries/properties';
import client from '@/lib/apolloClient';

// @ts-ignore
export const useFetchProperties = (filter?) => {
  const { loading, error, data } = useQuery(GET_PROPERTIES, {
    client,
    variables: { filter }
  });

  return { loading, error, data };
};