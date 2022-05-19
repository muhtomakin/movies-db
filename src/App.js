import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Main from './components/Main'
import Movie from './components/SingleMovie'

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Main />
      </Route>
      <Route path='/movies/:id' children={<Movie />} />
    </Switch>
  )
}
export default App;
