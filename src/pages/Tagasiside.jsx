import { useRef, useState } from "react"
import { Link } from "react-router-dom"

function Tagasiside() {

  const [tagasisided, setTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"])
  const tagasisideRef = useRef();

  const kustuta = (index) => {
    tagasisided.splice(index, 1);
    setTagasisided(tagasisided.slice());
  }

  const lisaUusTagasiSide = () => {
    tagasisided.push(tagasisideRef.current.value);
    setTagasisided(tagasisided.slice());
  }
  
  return (
    <div>
      <Link to="/">
          <button>Tagasi</button>
      </Link>
      {tagasisided.map((t, i) =>
        <div key={t} style={{justifyContent: "center", display: "flex"}}>
          <div>{t}</div>
          <button onClick={() => kustuta(i)}>X</button>
        </div>
      )}
      <label>Lisa uus tagasiside</label>
      <input ref={tagasisideRef}/>
      <button onClick={lisaUusTagasiSide}>Sisesta</button>
    </div>
  )
}

export default Tagasiside