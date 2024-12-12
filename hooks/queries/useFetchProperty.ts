import { useQuery } from '@apollo/client';
import client from '@/lib/apolloClient';
import { GET_PROPERTY } from '@/graphql/queries/property';

// @ts-ignore
export const useFetchProperty = (id) => {
  const { loading, error, data } = useQuery(GET_PROPERTY, {
    client,
    variables: { id }
  });

  return { loading, error, data };
};
