import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'
import MaterialSetup from './utils/MaterialSetup'

const App = () => {
  return (
    <MaterialSetup>
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
    </MaterialSetup>
  )
}

export default App
