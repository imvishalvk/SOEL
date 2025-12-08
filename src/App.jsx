import { useState } from 'react'
import Header from './Components/header'
import './App.css'
import Landing from './Components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Landing />
    </>
  )
}

export default App
