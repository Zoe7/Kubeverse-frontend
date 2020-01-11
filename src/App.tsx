import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'
import MaterialSetup from './utils/MaterialSetup'
import { UserContextProvider } from './utils/UserContext'

const App = () => {
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
