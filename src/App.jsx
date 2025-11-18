
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Tagasiside from './pages/Tagasiside'
import TagasisideAndjad from './pages/TagasisideAndjad'

function App() {

  return (
    <>
      <Link to="/tagasiside">
        <button>Tagasiside</button>
      </Link>
      <Link to="/tagasisideandjad">
        <button>Tagasiside andjad</button>
      </Link>

      <Routes>
        <Route path="/" element={ <div>Tere!</div> } />
        <Route path="/tagasiside" element={ <Tagasiside /> } />
        <Route path="/tagasisideandjad" element={ <TagasisideAndjad /> } />
      </Routes>
    </>
  )
}

export default App
