import { useState } from "react"
import tegevusedDB from "../data/tegevused.json"

function Tegevused() {
  const [tegevused, setTegevused] = useState(tegevusedDB.items.slice());
  const [currentUser, setCurrentUser] = useState(null);

  const tegevusedKasutajal = id => tegevused.filter(tegevus => tegevus.user_id === id);
  const handleUserClick = id => setCurrentUser(prevUser => (prevUser === id ? null : id));
  const kuvaValmis = () => {
    const answer = tegevusedDB.items.filter(tegevus => tegevus.is_complete);
    setTegevused(answer);
  }
  const kuvaMitteValmis = () => {
    const answer = tegevusedDB.items.filter(tegevus => !tegevus.is_complete);
    setTegevused(answer);
  }
  const tT2hega = () => {
    const answer = tegevusedDB.items.filter(tegevus => tegevus.text.toLowerCase().startsWith("t"));
    setTegevused(answer);
  }
  const rohkemKui20T2hem2rki = () => {
    const answer = tegevusedDB.items.filter(tegevus => tegevus.text.length > 20);
    setTegevused(answer);
  }
  const reset = () => {
    setTegevused(tegevusedDB.items.slice());
  }

  return (
    <div>
      <br />
      <div style={{ display:"flex", gap: "1rem", justifyContent: "space-between"}}>
        {[1,2,3].map(userId => (
          <div key={userId} style={{ display: "flex", flexDirection: "column" }}>
            <button onClick={() => handleUserClick(userId)}>
              Kasutaja {userId} tegevused
            </button>
            {currentUser === userId &&
              tegevusedKasutajal(userId).map(tegevus => 
                <div key={tegevus.id}>{tegevus.text}</div>
            )}
          </div>
        ))}
      </div>
      <br />
      <div style={{ display:"flex", gap: "1rem", justifyContent: "space-between"}}>
        <button onClick={kuvaValmis}>Valmis tegevused</button>
        <button onClick={kuvaMitteValmis}>Mittevalmis tegevused</button>
        <button onClick={tT2hega}>t tähega algavad tegevused</button>
        <button onClick={rohkemKui20T2hem2rki}>Rohkem kui 20 tähemärki</button>
        <button onClick={reset}>Reset</button>
      </div>
      <hr />
      <h1>{tegevused.length} tegevust</h1> <br />
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