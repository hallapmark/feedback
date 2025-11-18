import { useState } from "react"
import tegevusedDB from "../data/tegevused.json"

function Tegevused() {
  const [tegevused, setTegevused] = useState(tegevusedDB.items.slice());
  const [kuvaKasutaja1Tegevused, setKuvaKasutaja1Tegevused] = useState(false);
  const [kuvaKasutaja2Tegevused, setKuvaKasutaja2Tegevused] = useState(false);
  const [kuvaKasutaja3Tegevused, setKuvaKasutaja3Tegevused] = useState(false);

  const tegevusedKasutajal = id => tegevused.filter(tegevus => tegevus.user_id === id);

  return (
    <div>
      <h1>{tegevused.length} tegevust</h1> <br />
      <div style={{display:"flex"}}>
        <div style={{display:"flex", flexDirection:"column"}}>
          <button onClick={() => setKuvaKasutaja1Tegevused(!kuvaKasutaja1Tegevused)}>Kasutaja 1 tegevused</button>
          {kuvaKasutaja1Tegevused && 
          tegevusedKasutajal(1).map((tegevus) => 
            <div key={tegevus.id}>{tegevus.text}</div>
          )}
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
          <button onClick={() => setKuvaKasutaja2Tegevused(!kuvaKasutaja2Tegevused)}>Kasutaja 2 tegevused</button>
          {kuvaKasutaja2Tegevused && tegevusedKasutajal(2).map((tegevus) => 
            <div key={tegevus.id}>{tegevus.text}</div>
          )}
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
          <button onClick={() => setKuvaKasutaja3Tegevused(!kuvaKasutaja3Tegevused)}>Kasutaja 3 tegevused</button>
          {kuvaKasutaja3Tegevused && tegevusedKasutajal(3).map((tegevus) => 
            <div key={tegevus.id}>{tegevus.text}</div>
          )}
        </div>
      </div>
      {tegevused.map((tegevus) => 
        <div key={tegevus.id}>
          <h2>{tegevus.id}. {tegevus.text}</h2>
          <div>User id: {tegevus.user_id}</div>
          <div>{tegevus.created_at}</div>
          <div>Tags: {tegevus.Tags.map(element => <div key={element}>{element}</div>)}</div>
          <br /> <br />
        </div>
      )}
    </div>
  )
}
export default Tegevused