// import './App.css';
// Important for API Consumption: To enable interaction with our GraphQL API on the front end, we utilize these tools to develop the client-side behavior
import React from 'react';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';
import './css/app.css';
import AddNav from './components/Nav';
import { Outlet } from 'react-router-dom';

// import once created -abel
// import Header from './components/Header';
// import Footer from './components/Footer';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    // Important for API Consumption: Wrap your component tree with the ApolloProvider component to enable access to the ApolloClient from anywhere within the application
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        {/* can add once header is created, or different component. -abel */}
        {/* <Header /> */}
        <AddNav />
        <div className="container">
          <Outlet />
        </div>
        {/* can add once footer is created -abel */}
        {/* <Footer />  */}
      </div>
    </ApolloProvider>
  );
}

export default App;
