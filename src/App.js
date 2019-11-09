import React from 'react'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'
import { Route, Switch } from 'react-router-dom'

const App = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={PageNotFound} />
    </Switch>
)

export default App
