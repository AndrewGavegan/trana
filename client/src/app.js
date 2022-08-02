import React from 'react';
import './app.css';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import auth from './utils/auth'

import Home from './components/home';
import Navigation from './components/navigation';
import Content from './components/main';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Signup from './components/signup';
import { Route, Routes } from 'react-router-dom';

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
  const [loggedIn, setLoggedIn] = useState(auth.loggedIn())

  return (
    <ApolloProvider client={client}>
      <div className="background">
        <div className="Trana">
          <Navigation />
          <div className="notNav">
            <Routes>
              {loggedIn ? (
                <React.Fragment>
                  <Route path="/" element={<Home setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} />
                  <Route path="/content" element={<Content setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} />
                  <Route path="/dashboard" element={<Dashboard setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </React.Fragment>
              )}
            </Routes>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;