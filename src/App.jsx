import { useState } from 'react'
import Header from './Components/header'
import './App.css'
import Landing from './Components/Landing'
import Subjects from './Components/Subjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Landing />
      <Subjects/>
    </>
  )
}

export default App
