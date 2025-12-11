import { useState } from 'react'
import Header from './Components/header/Header'
import './App.css'
import Landing from './Components/Landing'
import Subjects from './Components/Subjects'


function App() {

  return (
    <>
      {/* <TopRibbon/> */}
      <Header/>
      <Landing />
      <Subjects/>
    </>
  )
}

export default App
