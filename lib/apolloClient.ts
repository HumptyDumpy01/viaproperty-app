import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import dotenv from 'dotenv';
import { setContext } from '@apollo/client/link/context';
import cookie from 'js-cookie';

dotenv.config({
  path: `${__dirname}/config.env`
});

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL_BACK}/graphql`
});

const authLink = setContext((_, { headers }) => {
  const token = cookie.get('access_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: `${process.env.NEXT_PUBLIC_API_URL_BACK!.replace(/^http/, 'ws')}/graphql`,
    connectionParams: () => {
      const token = cookie.get('access_token');
      return {
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      };
    },
    keepAlive: 10000,
    on: {
      connected: () => console.log('WebSocket connected'),
      closed: (event) => console.log('WebSocket closed', event),
      error: (error) => console.error('WebSocket error', error),
      connecting: () => console.log('WebSocket connecting'),
      opened: (event) => console.log('WebSocket opened:', event)
    }
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});

export default client;