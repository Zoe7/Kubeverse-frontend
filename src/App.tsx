import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Login from './pages/Login'
import Header from './components/Header'
import MaterialSetup from './utils/MaterialSetup'
import { UserContextProvider } from './utils/UserContext'

const App = () => {
  const client = new ApolloClient({
    request: operation => {
      const token = localStorage.getItem('token')
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : '',
        },
      })
    },
    uri: `${process.env.REACT_APP_GRAPHQL_ENDPOINT}`,
  })
  return (
    <MaterialSetup>
      <UserContextProvider>
        <Header />
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContextProvider>
    </MaterialSetup>
  )
}

export default App
