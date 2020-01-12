import React, { useContext } from 'react'
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
import { UserContextProvider, UserContext } from './utils/UserContext'
import Home from './pages/Home'

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

  const PrivateRoutes = ({ children }: { children: JSX.Element }) => {
    const userContext = useContext(UserContext)
    const history = useHistory()

    if (!userContext.isAuthenticated) {
      history.push('/login')
    }

    return children
  }

  return (
    <ApolloProvider client={client}>
      <MaterialSetup>
        <Router>
          <UserContextProvider>
            <Header />
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoutes>
                <Route path="/">
                  <Home />
                </Route>
              </PrivateRoutes>
            </Switch>
          </UserContextProvider>
        </Router>
      </MaterialSetup>
    </ApolloProvider>
  )
}

export default App
