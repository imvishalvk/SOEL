import { useState } from 'react'
import Header from './Components/header/Header'
import './App.css'
import Landing from './Components/Landing'
// import TopRibbon from './Components/topRibbon/TopRibbon'

function App() {

  return (
    <>
      {/* <TopRibbon/> */}
      <Header/>
      <Landing />
    </>
  )
}

export default App
