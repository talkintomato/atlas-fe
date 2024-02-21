import { ApolloClient, InMemoryCache } from '@apollo/client';

// const apiUrl = import.meta.env.VITE_API_URL;
const apiUrl = 'http://localhost:4000/graphql'

const client = new ApolloClient({
  uri: apiUrl, 
  cache: new InMemoryCache(),
});

export default client;
