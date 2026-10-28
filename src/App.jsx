import './App.css'
import Event from './Pages/Events/Events'
import Home from './Pages/Home/Home'
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <HashRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Define paths and the components they render */}
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        
        {/* Fallback route for 404 Not Found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </HashRouter>
  )
}

export default App
