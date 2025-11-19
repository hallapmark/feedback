
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Tagasiside from './pages/Tagasiside'
import TagasisideAndjad from './pages/TagasisideAndjad'
import Tegevused from './pages/Tegevused'
import Users from './pages/Users'

function App() {

  return (
    <>
      <Link to="/tagasiside"><button>Tagasiside</button></Link>
      <Link to="/tagasisideandjad"><button>Tagasiside andjad</button></Link>
      <Link to="/tegevused"><button>Tegevused</button></Link>
      <Link to="/kasutajad"><button>Kasutajad</button></Link>

      <Routes>
        <Route path="/" element={ <div>Tere!</div> } />
        <Route path="/tagasiside" element={ <Tagasiside /> } />
        <Route path="/tagasisideandjad" element={ <TagasisideAndjad /> } />
        <Route path="/tegevused" element={ <Tegevused /> } />
        <Route path="/kasutajad" element={ <Users /> } />
      </Routes>
    </>
  )
}

export default App
