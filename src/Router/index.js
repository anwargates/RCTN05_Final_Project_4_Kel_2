import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import About from '../Pages/About'
import Home from '../Pages/Home'

const Routers = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path='/'
          element={<Home />}
        />
        <Route
          exact
          path='/about'
          element={<About />}
        />
      </Switch>
    </>
  )
}

export default Routers
