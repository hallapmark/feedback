import { useState } from "react";
import kasutajadDB from "../data/kasutajad.json";
import styles from "../styles/Kasutajad.module.css"

function Kasutajad() {
  const [kasutajad, setKasutajad] = useState(kasutajadDB.slice());

  return (
    <div>
      <h1>Kasutajad</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center"}}>
        {kasutajad.map((kasutaja) =>  {
          const address = kasutaja.address;
          const company = kasutaja.company;

          return (
            <div key={kasutaja.id} className={styles.usercard}>
              <div className={styles.header}>
                <h2>{kasutaja.name}</h2>
                <p className={styles.username}>@{kasutaja.username}</p>
                <p className={styles.email}>{kasutaja.email}</p>
              </div>

              <div className={styles.cardbody}>
                {address && 
                  <div className={`${styles.section} ${styles.address}`}>
                    <h3>Address</h3>
                    <p>{address.street}, {address.suite}</p>
                    <p>{address.city}, {address.zipcode}</p>
                    {address.geo && <p>Lat: {address.geo.lat}, <br /> Lng: {address.geo.lng}</p>}
                  </div>
                }
                { company && 
                  <div className={`${styles.section} ${styles.company}`}>
                    <h3>Company</h3>
                    <p>
                      <strong>{company.name}</strong>
                    </p>
                    <p>{company.catchPhrase}</p>
                    <p>Focus: {company.bs}</p>
                  </div>
                }
              </div>

              <div className={styles.footer}>
                <p>📞 {kasutaja.phone}</p>
                <p>{kasutaja.website}</p>
              </div>
            </div>
            )
        })}
      </div>
    </div>
  );
}
export default Kasutajad;
