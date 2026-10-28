import './App.css'
import Event from './Pages/Events/Events'
import Home from './Pages/Home/Home'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App