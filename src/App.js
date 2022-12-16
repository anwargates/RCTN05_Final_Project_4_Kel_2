import React from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import Router from './Router/index'

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  )
}

export default App
