import { useState } from "react"
import nimedDB from "../data/nimed.json"
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function TagasisideAndjad() {
  const [names, setNames] = useState(nimedDB.slice());
  const [enteredName, setEnteredName] = useState("");

  const za = () => {
    const answer = names.toSorted((a, b) => b.localeCompare(a));
    setNames(answer);
  }

  const mTahegaAlgavad = () => {
    const answer = names.filter((name) => name.toLowerCase().startsWith("m"));
    setNames(answer);
  }

  const yTahegaLoppevad = () => {
    const answer = names.filter((name) => name.toLowerCase().endsWith("y"));
    setNames(answer);
  }

  const kuueKohalised = () => {
    const answer = names.filter((name) => name.length === 6);
    setNames(answer);
  }

  // Choice for practice: we only delete locally here, not 'properly' from the 'DB'
  const deleteItem = (i) => {
    const namesCopy = names.slice();
    namesCopy.splice(i,1);
    setNames(namesCopy);
  }

  const addName = () => {
    const namesCopy = names.slice();
    namesCopy.push(enteredName);
    setNames(namesCopy);
    toast.success("Added name!",
      {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
      },})
  }

  const reset = () => {
    setNames(nimedDB.slice());
  }

  return (
    <div>
      <Link to="/">
        <button>Tagasi</button>
      </Link>
      <h1>Tagsiside andjad</h1>
      <p><strong>{names.length} tk</strong></p>

      <button onClick={za}>ZA</button>
      <button onClick={mTahegaAlgavad}>M tähega algavad</button>
      <button onClick={yTahegaLoppevad}>Y tähega lõppevad</button>
      <button onClick={kuueKohalised}>Kuuekohalised</button>
      <button onClick={reset}>Taasta</button>
      <br />
      <br />
      <label htmlFor="firstName" style={{ display: 'none' }}>Eesnimi</label>
      <input 
        value={enteredName} 
        onChange={(e) => setEnteredName(e.target.value)} 
        id="firstName" 
        type="text" 
        placeholder="Eesnimi" 
        style={{marginRight: "8px"}}
      />
      <button onClick={addName}>Lisa</button>
      <br />
      <br />
      
      {names.map((nimi, i) => 
        <div key={nimi} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{display: "flex", justifyContent: "space-between", gap: "18px", alignItems: "center", minWidth: "320px"}}>
            <div>EST-{nimi}</div>
            <button onClick={() => deleteItem(i)}>Kustuta</button>
          </div>
        </div>
      )}
      <div><Toaster /></div>
    </div>
  )
}
export default TagasisideAndjad