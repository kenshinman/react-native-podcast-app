import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://frozen-river-77426.herokuapp.com/query',
  cache: new InMemoryCache(),
});
