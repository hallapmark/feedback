
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Tagasiside from './pages/Tagasiside'

function App() {

  return (
    <>
      <Link to="/tagasiside">
        <button>Tagasiside</button>
      </Link>

      <Routes>
        <Route path="/" element={ <div>Tere!</div> } />
        <Route path="/tagasiside" element={ <Tagasiside /> } />
      </Routes>
    </>
  )
}

export default App
