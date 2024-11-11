import { ApolloClient, InMemoryCache } from '@apollo/client';
import dotenv from 'dotenv';

dotenv.config({
  // path to .env.config
  path: `${__dirname}/config.env`
});

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_API_URL_BACK}/graphql`,
  cache: new InMemoryCache()
});

export default client;