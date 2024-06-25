import React from 'react'
import  Header  from './pages/Header'
import  Footer  from './pages/Footer'
import {Outlet} from "react-router-dom"
import "./App.css"
import "./index.css"


function App() {
  return (
    <div className="app ">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App