import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import dotenv from 'dotenv';

dotenv.config({
  path: `${__dirname}/config.env`
});

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL_BACK}/graphql`
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: `${process.env.NEXT_PUBLIC_API_URL_BACK!.replace(/^http/, 'ws')}/graphql`,
    connectionParams: {
      // Add any necessary connection parameters here
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
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});

export default client;
