
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Tagasiside from './pages/Tagasiside'
import TagasisideAndjad from './pages/TagasisideAndjad'
import Tegevused from './pages/Tegevused'

function App() {

  return (
    <>
      <Link to="/tagasiside">
        <button>Tagasiside</button>
      </Link>
      <Link to="/tagasisideandjad">
        <button>Tagasiside andjad</button>
      </Link>
      <Link to="/tegevused">
        <button>Tegevused</button>
      </Link>

      <Routes>
        <Route path="/" element={ <div>Tere!</div> } />
        <Route path="/tagasiside" element={ <Tagasiside /> } />
        <Route path="/tagasisideandjad" element={ <TagasisideAndjad /> } />
        <Route path="/tegevused" element={ <Tegevused /> } />
      </Routes>
    </>
  )
}

export default App
